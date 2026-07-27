import { caseStudies } from "../caseStudies/caseStudies.data";

export const SITE = {
	name: "Ashton Honnecke",
	url: "https://ashton.honnecke.us",
	defaultTitle: "Ashton Honnecke — Linux / Python / Cloud / DevOps",
	defaultDescription:
		"Portfolio of Ashton Honnecke, a Linux / Python / Cloud / DevOps engineer with ~25 years building production systems. Open-source CLIs, AI/LLM projects, and redacted client case studies.",
	ogImage: "https://ashton.honnecke.us/og.png",
};

export interface Meta {
	title: string;
	description: string;
}

const suffix = ` — ${SITE.name}`;

// Routes that aren't project tiles or case studies.
const STATIC: Record<string, Meta> = {
	"/": {
		title: SITE.defaultTitle,
		description: SITE.defaultDescription,
	},
	"/cv": {
		title: `CV${suffix}`,
		description:
			"Curriculum vitae of Ashton Honnecke — ~25 years shipping production systems across Python, TypeScript, and AWS, from Linux internals to cloud architecture.",
	},
	"/case-studies": {
		title: `Case Studies${suffix}`,
		description:
			"Redacted case studies of client prototypes — the architecture, the trade-offs, and what happened. Client names and proprietary material removed.",
	},
};

// Project detail routes, keyed by the route/navMap key. Titles get the site
// suffix appended; descriptions are ~1 keyword-rich sentence for search.
const PROJECT: Record<string, Meta> = {
	consolo: {
		title: "Consolo",
		description:
			"Consolo — a Python CLI on PyPI that pseudo-mounts a deployed AWS Lambda's filesystem locally and hot-syncs your edits, built on boto3 and watchdog.",
	},
	snifter: {
		title: "Snifter",
		description:
			"Snifter — a Python CLI for inspecting ephemeral AWS SNS traffic via a throwaway SQS queue, with live interactive debugging and automatic teardown.",
	},
	jolly_brancher: {
		title: "Jolly Brancher",
		description:
			"Jolly-Brancher — turns a JIRA ticket into a git branch and pull request in one step. A Python CLI (jira, PyGithub) plus a full Emacs interface.",
	},
	wayward: {
		title: "Wayward",
		description:
			"Wayward — a Python background daemon (watchdog, python-daemon) that routes downloaded files by type, built around a Rocksmith custom-song pipeline.",
	},
	hagglebot: {
		title: "Hagglebot",
		description:
			"Hagglebot — an AI assistant that haggles car prices over email. FastAPI, async Postgres, JMAP, and an LLM offer-extraction pipeline.",
	},
	rentinity: {
		title: "Rentinity",
		description:
			"Rentinity — a proof-of-concept for fractional triple-net-lease real estate tokenized as ERC-20 shares on Polygon; TypeScript, Supabase, ethers.js.",
	},
	tonal_recall: {
		title: "Tonal Recall",
		description:
			"Tonal Recall — a real-time fretboard-training game for guitar and bass using aubio pitch detection. Built in Python with Pygame and NumPy.",
	},
	toy_contractor: {
		title: "Toy Contractor",
		description:
			"Toy Contractor — generates and refines legal contracts from plain English on a self-hosted Mistral model via Ollama. FastAPI and Redis, no external API.",
	},
	foodie_folder: {
		title: "Foodie Folder",
		description:
			"Foodie Folder — a cross-platform mobile app (Expo, React Native, TypeScript) that turns restaurant-menu photos into structured dishes via GPT-vision OCR.",
	},
	safe_streets: {
		title: "Safe Streets CO",
		description:
			"Safe Streets Colorado — a traffic-safety legislation tracker built as a static Eleventy site, live at safestreetsco.com.",
	},
	denv: {
		title: "denv",
		description:
			"denv — a Python CLI that redacts secrets from .env files (value, key, or both; quote-aware; works over stdin/stdout).",
	},
	docker: {
		title: "Containers",
		description:
			"Cleaning Up Your Python Environment — a PyColorado talk on containerizing dev environments with Docker and Docker Compose for reproducible setups.",
	},
	linting: {
		title: "Linting",
		description:
			"A PyDEN talk on why linting is worth the setup: it cuts reviewer cognitive load, not just bug count. Formatters like Black for near-zero-effort consistency.",
	},
	devops: {
		title: "DevOps",
		description:
			"Ashton Honnecke's CI/CD and infrastructure work — containerized, reproducible deploys across AWS and GCP with GitHub Actions, GitLab CI, and more.",
	},
	github: {
		title: "GitHub",
		description:
			"Ashton Honnecke on GitHub — open-source Python CLIs (Consolo, Snifter, Jolly-Brancher), experiments, and the day-to-day of how he builds.",
	},
	resume_build_pipeline: {
		title: "Resume Build Pipeline",
		description:
			"An automated pipeline that builds a resume from a single Org-mode source into PDF, LaTeX, DOCX, and HTML, run in Emacs via custom Elisp.",
	},
	big_wheel: {
		title: "Big Wheel",
		description:
			"Big Wheel — an eight-foot-tall mutant tricycle built for Burning Man, wrapped in hundreds of addressable RGB LEDs driven by Arduinos.",
	},
	fire_table: {
		title: "Fire Table",
		description:
			"Fire Table — an interactive propane fire installation for Burning Man where the patterns you rake into the sand become the patterns that burn.",
	},
	quadricycle: {
		title: "Quadricycle",
		description:
			"Quadricycle — a four-frame parallel bicycle welded for the deep playa, with a self-centering steering linkage and hundreds of LEDs.",
	},
};

/** Resolve title + description for a pathname. */
export function metaForPath(pathname: string): Meta {
	const p = pathname.replace(/\/+$/, "") || "/";

	const cs = p.match(/^\/case-studies\/(.+)$/);
	if (cs) {
		const study = caseStudies.find((s) => s.slug === cs[1]);
		if (study) {
			return {
				title: `${study.title} — Case Study${suffix}`,
				description: study.summary,
			};
		}
	}

	if (STATIC[p]) return STATIC[p];

	const project = PROJECT[p.replace(/^\//, "")];
	if (project) return { title: project.title + suffix, description: project.description };

	return { title: SITE.defaultTitle, description: SITE.defaultDescription };
}
