// Projects the variant-aware Resume dataset down to a single audience variant.
// Rendering and PDF generation both consume ResolvedResume, never the raw
// dataset, so variant selection happens in exactly one place.

import type {
	ByVariant,
	ResolvedResume,
	ResolvedWork,
	Resume,
	SharedOrByVariant,
	Variant,
	WorkEntry,
} from "./resume.types";

function isByVariant<T>(value: SharedOrByVariant<T>): value is ByVariant<T> {
	return (
		typeof value === "object" &&
		value !== null &&
		"cto" in (value as object) &&
		"ic" in (value as object)
	);
}

function pick<T>(value: SharedOrByVariant<T>, variant: Variant): T {
	return isByVariant(value) ? value[variant] : value;
}

function resolveWork(work: WorkEntry, variant: Variant): ResolvedWork {
	return {
		company: work.company,
		position: pick(work.position, variant),
		period: work.period,
		expertise: work.expertise[variant],
		highlights: work.highlights[variant],
		url: work.url,
	};
}

export function selectVariant(
	resume: Resume,
	variant: Variant,
): ResolvedResume {
	return {
		variant,
		contact: resume.contact,
		tagline: resume.tagline[variant],
		highlights: resume.highlights[variant],
		work: resume.work.map((entry) => resolveWork(entry, variant)),
		skills: resume.skills,
		talks: resume.talks,
		projects: resume.projects,
		education: resume.education,
		profiles: resume.profiles,
		interests: resume.interests,
	};
}
