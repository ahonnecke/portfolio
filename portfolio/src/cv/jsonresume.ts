// Projects the dataset into machine-readable formats:
//   toJsonResume  — standards-compliant JSON Resume (https://jsonresume.org),
//                   embedded inline in the page for machine readers.
//   toSchemaOrg   — schema.org Person/ProfilePage JSON-LD for crawlers & LLMs.
//
// Both are derived from the same typed dataset via selectVariant, so the web
// page, the PDF, and these artifacts can never drift.

import type { Resume, Variant } from "./resume.types";
import { selectVariant } from "./variant";

const EN_DASH = /[–—-]/;

function splitPeriod(period: string): { start: string; end?: string } {
	const [start, end] = period.split(EN_DASH).map((part) => part.trim());
	if (!end || end.toLowerCase() === "present") {
		return { start };
	}
	return { start, end };
}

export interface JsonResume {
	$schema: string;
	basics: {
		name: string;
		label: string;
		email: string;
		url: string;
		summary: string;
		location: { city: string; region: string; countryCode: string };
		profiles: { network: string; url: string; username: string }[];
	};
	work: {
		name: string;
		position: string;
		startDate: string;
		endDate?: string;
		summary: string;
		highlights: string[];
	}[];
	education: {
		institution: string;
		studyType: string;
		area?: string;
		startDate: string;
		endDate?: string;
	}[];
	skills: { name: string }[];
	projects: { name: string; description: string; url: string }[];
	interests: { name: string }[];
	/** Non-standard: speaking engagements (JSON Resume has no native field). */
	x_speaking: { title: string; venue: string; url: string }[];
	meta: { variant: Variant; canonical: string; version: string };
}

export function toJsonResume(resume: Resume, variant: Variant): JsonResume {
	const r = selectVariant(resume, variant);
	const [city = "Denver", region = "CO"] = r.contact.location
		.split(",")
		.map((s) => s.trim());

	return {
		$schema:
			"https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
		basics: {
			name: r.contact.name,
			label: r.tagline,
			email: r.contact.email,
			url: r.contact.website,
			summary: r.highlights.join(" "),
			location: { city, region, countryCode: "US" },
			profiles: r.profiles.map((p) => ({
				network: p.network,
				url: p.url,
				username: p.username,
			})),
		},
		work: r.work.map((w) => {
			const { start, end } = splitPeriod(w.period);
			return {
				name: w.company,
				position: w.position,
				startDate: start,
				...(end ? { endDate: end } : {}),
				summary: w.expertise,
				highlights: w.highlights,
			};
		}),
		education: r.education.map((e) => {
			const { start, end } = splitPeriod(e.period);
			return {
				institution: e.institution,
				studyType: e.studyType,
				...(e.notes.length ? { area: e.notes.join("; ") } : {}),
				startDate: start,
				...(end ? { endDate: end } : {}),
			};
		}),
		skills: r.skills.map((name) => ({ name })),
		projects: r.projects.map((p) => ({
			name: p.name,
			description: p.summary.join(" "),
			url: p.url,
		})),
		interests: [{ name: r.interests }],
		x_speaking: r.talks.map((t) => ({
			title: t.title,
			venue: t.venue,
			url: t.url,
		})),
		meta: { variant, canonical: `${r.contact.website}/cv`, version: "1" },
	};
}

/** schema.org Person graph for inline JSON-LD. */
export function toSchemaOrg(
	resume: Resume,
	variant: Variant,
): Record<string, unknown> {
	const r = selectVariant(resume, variant);
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: r.contact.name,
		jobTitle: r.tagline,
		email: `mailto:${r.contact.email}`,
		url: r.contact.website,
		address: { "@type": "PostalAddress", addressLocality: r.contact.location },
		sameAs: [
			r.contact.linkedin,
			r.contact.github,
			...r.profiles.map((p) => p.url),
		],
		knowsAbout: r.skills,
		alumniOf: r.education.map((e) => ({
			"@type": "CollegeOrUniversity",
			name: e.institution,
		})),
	};
}
