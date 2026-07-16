import react from "@vitejs/plugin-react";
import { type Plugin, defineConfig } from "vite";
import { caseStudies } from "./src/caseStudies/caseStudies.data";

const SITE = "https://ashton.honnecke.us";

// Routes that aren't derived from data. Keep in sync with <Routes> in App.tsx.
const STATIC_ROUTES = ["/", "/case-studies", "/cv"];

/**
 * Emit sitemap.xml at build time, derived from the case-study data rather than
 * hand-maintained. A static sitemap rots the moment someone adds a case study
 * and forgets to update it — and a sitemap listing the wrong URLs is worse than
 * no sitemap, because you stop looking at it.
 *
 * This matters more than usual here: the site is an SPA served by `serve -s`,
 * which rewrites every unmatched path to index.html. A crawler cannot discover
 * routes by probing — every URL returns 200 whether or not it exists. The
 * sitemap is how the real route list gets stated out loud.
 */
function sitemap(): Plugin {
	return {
		name: "emit-sitemap",
		apply: "build",
		generateBundle() {
			const paths = [
				...STATIC_ROUTES,
				...caseStudies.map((study) => `/case-studies/${study.slug}`),
			];
			const body = paths
				.map((p) => `\t<url>\n\t\t<loc>${SITE}${p}</loc>\n\t</url>`)
				.join("\n");
			this.emitFile({
				type: "asset",
				fileName: "sitemap.xml",
				source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
			});
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), sitemap()],
});
