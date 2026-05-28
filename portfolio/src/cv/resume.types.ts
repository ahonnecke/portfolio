// Typed schema for the CV. This is the single source of truth for résumé
// content; it is authored by hand, projected per-variant for rendering
// (see selectVariant in variant.ts), and exported to standards-compliant
// JSON Resume for the machine-readable endpoint.
//
// Two audience variants are maintained from one dataset:
//   "cto" — engineering-leadership / CTO positioning (the published default)
//   "ic"  — deep senior / individual-contributor positioning
//
// The variants carry largely DISJOINT achievement bullets and distinct
// "Subject Matter Expert" lines, so per-variant fields use ByVariant<T>
// rather than a shared list filtered by tag.

export type Variant = "cto" | "ic";

export const VARIANTS: readonly Variant[] = ["cto", "ic"] as const;

/** A value that differs per audience variant. */
export type ByVariant<T> = Record<Variant, T>;

/** A value that is either shared across variants or overridden per variant. */
export type SharedOrByVariant<T> = T | ByVariant<T>;

export interface Contact {
	name: string;
	/** Public contact address shown in the CV header. */
	email: string;
	website: string;
	linkedin: string;
	github: string;
	location: string;
}

export interface WorkEntry {
	company: string;
	/** Job title; usually shared, occasionally reordered per variant. */
	position: SharedOrByVariant<string>;
	/** Display period exactly as rendered, e.g. "2025–Present". */
	period: string;
	startYear: number;
	/** null = present / ongoing. */
	endYear: number | null;
	/** The "Subject Matter Expert:" line — distinct per variant. */
	expertise: ByVariant<string>;
	/** Achievement bullets — distinct sets per variant. */
	highlights: ByVariant<string[]>;
	url?: string;
}

export interface TalkLink {
	label: string;
	url: string;
}

export interface Talk {
	title: string;
	/** Primary link (talk landing page or recording). */
	url: string;
	venue: string;
	links: TalkLink[];
}

/** An open-source utility (rendered under "FOSS Utilities"). */
export interface Project {
	name: string;
	url: string;
	summary: string[];
}

export interface EducationEntry {
	institution: string;
	studyType: string;
	period: string;
	notes: string[];
}

export interface Profile {
	network: string;
	url: string;
	username: string;
}

/** The complete, variant-aware dataset. */
export interface Resume {
	contact: Contact;
	/** Tagline under the name — distinct per variant. */
	tagline: ByVariant<string>;
	/** Highlights block — distinct per variant. */
	highlights: ByVariant<string[]>;
	work: WorkEntry[];
	skills: string[];
	talks: Talk[];
	projects: Project[];
	education: EducationEntry[];
	profiles: Profile[];
	interests: string;
}

// --- Resolved (single-variant) view model produced by selectVariant ---

export interface ResolvedWork {
	company: string;
	position: string;
	period: string;
	expertise: string;
	highlights: string[];
	url?: string;
}

export interface ResolvedResume {
	variant: Variant;
	contact: Contact;
	tagline: string;
	highlights: string[];
	work: ResolvedWork[];
	skills: string[];
	talks: Talk[];
	projects: Project[];
	education: EducationEntry[];
	profiles: Profile[];
	interests: string;
}
