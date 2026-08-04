import {
	caseStudies,
	externalCaseStudy,
} from "../caseStudies/caseStudies.data";
import type { CaseStudy } from "../caseStudies/caseStudies.types";
import { projects } from "../projects/projects.data";

// A single, tag-filterable list of everything: case studies + projects. The CV
// is intentionally absent — it lives in the site header, not in the work grid.

export interface WorkItem {
	/** Route, hosted app, or external URL. */
	to: string;
	/** Open in a new tab (external sites, hosted demos). */
	external?: boolean;
	title: string;
	/** Pills shown on the card face. */
	eyebrow: string[];
	/** Filterable tags. */
	tags: string[];
	blurb: string;
	accent: string;
	footer?: string;
}

// Filterable tags + a short sector label per case study.
const CS: Record<string, { tags: string[]; sector: string }> = {
	crewcapable: { tags: ["Case Study", "AI"], sector: "Manufacturing" },
	"hvac-moisture-platform": {
		tags: ["Case Study", "Web", "TypeScript"],
		sector: "HVAC",
	},
	ledgerline: {
		tags: ["Case Study", "Web", "TypeScript"],
		sector: "Insurtech",
	},
	"tariff-refund-analyst": { tags: ["Case Study", "AI"], sector: "Trade" },
	"embedded-laser-recovery": {
		tags: ["Case Study", "DevOps"],
		sector: "Embedded Linux",
	},
};

function caseItem(s: CaseStudy, to: string, external: boolean): WorkItem {
	const meta = CS[s.slug] ?? { tags: ["Case Study"], sector: s.sector };
	return {
		to,
		external,
		title: s.title,
		eyebrow: ["Case Study", meta.sector],
		tags: meta.tags,
		blurb: s.summary,
		accent: s.accent,
		footer: s.status,
	};
}

// Filterable tags per project route (the card's own "Category · Tech" eyebrow
// is derived from projects.data; these drive the filter bar).
const PROJECT_TAGS: Record<string, string[]> = {
	"/github": [],
	"/consolo": ["Python", "AWS"],
	"/snifter": ["Python", "AWS"],
	"/denv": ["Python", "Security"],
	"/shush": ["Python", "Security"],
	"/safe_streets": ["Web"],
	"/jolly_brancher": ["Python"],
	"/wayward": ["Python"],
	"/foodie_folder": ["Mobile", "TypeScript", "AI"],
	"/hagglebot": ["Python", "AI", "Web"],
	"/rentinity": ["TypeScript", "Blockchain", "Web"],
	"/prototypes/satoshis-wager/": ["TypeScript", "Web"],
	"/tonal_recall": ["Python"],
	"/toy_contractor": ["Python", "AI"],
	"/docker": ["Talk", "DevOps"],
	"/linting": ["Talk"],
	"/devops": ["DevOps"],
	"/big_wheel": ["Art"],
	"/fire_table": ["Art"],
	"/quadricycle": ["Art"],
};

const projectItems: WorkItem[] = projects.map((p) => ({
	to: p.to,
	external: p.to.startsWith("http") || p.to.startsWith("/prototypes/"),
	title: p.title,
	eyebrow: p.tag.split(" · "),
	tags: PROJECT_TAGS[p.to] ?? [],
	blurb: p.blurb,
	accent: p.accent,
	footer: p.home,
}));

export const workItems: WorkItem[] = [
	caseItem(externalCaseStudy, externalCaseStudy.external?.href ?? "#", true),
	...caseStudies.map((s) => caseItem(s, `/case-studies/${s.slug}`, false)),
	...projectItems,
];

// Filter-chip order. The grid only renders a chip if at least one item has it.
export const FILTER_TAGS = [
	"Python",
	"TypeScript",
	"AI",
	"Security",
	"Web",
	"Mobile",
	"Blockchain",
	"DevOps",
	"Talk",
	"Art",
	"Case Study",
];
