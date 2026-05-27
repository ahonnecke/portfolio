// Renders the /cv React route to PDF + JSON Resume via headless Chromium.
// The print layer in cv.css drives PDF layout; the JSON Resume is harvested
// from the page's embedded <script id="cv-resume-json">. One PDF + one JSON
// per audience variant.
//
//   CV_OUT       output directory       (default ../public/cv)
//   CV_BASE_URL  render against this origin instead of starting a dev server
//   CV_SHOTS     "1" to also write full-page PNG previews to /tmp
//
// Self-contained: with no CV_BASE_URL it boots a Vite dev server (correct SPA
// routing for /cv, no prior build needed), renders, and shuts it down.
//   npm run cv:build

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const outDir = process.env.CV_OUT ?? resolve(root, "public/cv");
const writeShots = process.env.CV_SHOTS === "1";

const variants = [
	{ id: "cto", query: "", pdf: "cv.pdf", json: "resume.json" },
	{ id: "ic", query: "?variant=ic", pdf: "cv-ic.pdf", json: "resume-ic.json" },
];

mkdirSync(outDir, { recursive: true });

let server;
let baseUrl = process.env.CV_BASE_URL;
if (!baseUrl) {
	const { createServer } = await import("vite");
	server = await createServer({ root, server: { port: 0 }, logLevel: "warn" });
	await server.listen();
	const url = server.resolvedUrls?.local?.[0];
	if (!url) {
		throw new Error("vite dev server did not report a local URL");
	}
	baseUrl = url.replace(/\/$/, "");
	console.log(`vite dev server: ${baseUrl}`);
}

const browser = await chromium.launch();
try {
	for (const variant of variants) {
		const page = await browser.newPage();
		await page.goto(`${baseUrl}/cv${variant.query}`, { waitUntil: "load" });
		await page.waitForSelector(".cv-name");

		const embedded = await page.locator("#cv-resume-json").textContent();
		if (embedded) {
			const dest = resolve(outDir, variant.json);
			writeFileSync(dest, `${JSON.stringify(JSON.parse(embedded), null, 2)}\n`);
			console.log(`json: ${dest}`);
		}

		if (writeShots) {
			await page.setViewportSize({ width: 1100, height: 1400 });
			const shot = `/tmp/cv-preview-${variant.id}.png`;
			await page.screenshot({ path: shot, fullPage: true });
			console.log(`screenshot: ${shot}`);
		}

		await page.emulateMedia({ media: "print", colorScheme: "light" });
		const pdf = resolve(outDir, variant.pdf);
		await page.pdf({
			path: pdf,
			printBackground: true,
			preferCSSPageSize: true,
		});
		console.log(`pdf: ${pdf}`);

		await page.close();
	}
} finally {
	await browser.close();
	if (server) {
		await server.close();
	}
}
