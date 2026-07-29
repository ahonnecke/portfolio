// Job-tailored landing pages. Each pitch re-shapes the portfolio around one
// role. These pages are noindex + absent from the sitemap (see Seo.tsx / the
// vite sitemap plugin) — they're link-shared into an application, not
// discoverable, so a recruiter for one company never lands on another's page.

export interface Requirement {
	/** What the JD asks for. */
	ask: string;
	/** Concrete evidence from Ashton's work. */
	proof: string;
}

export interface JobPitch {
	slug: string;
	role: string;
	company: string;
	/** Salary/location line, shown small under the title. */
	meta: string;
	/** The hero thesis — one or two sentences. */
	headline: string;
	/** Positioning paragraphs. */
	intro: string[];
	requirements: Requirement[];
	/** Work-item routes to feature, most-relevant first. */
	highlight: string[];
	/** Honest fit notes — named, not hidden. */
	gaps: { label: string; note: string }[];
	cvHref: string;
	email: string;
}

export const jobPitches: JobPitch[] = [
	{
		slug: "govcio-tech-lead",
		role: "Technical Lead",
		company: "GovCIO",
		meta: "Fully remote · Public Trust · #8443",
		headline:
			"You're building a secure, event-driven document-submission and processing platform. I just spent ten months building one.",
		intro: [
			"As CTO at CrewCapable I took a greenfield B2B platform from proof of concept to a productionized, horizontally-scalable AWS system in under ten months — as the sole engineer. It ingests documents (PDF, DOCX, images, email attachments) through a document-processing state machine with explicit failure and timeout paths, runs them through an LLM/OCR extraction pipeline, and turns them into validated, downstream-ready records. That is, nearly line for line, the platform this role is chartered to build.",
			"I lead the way this JD describes: hands-on, by example, and without treating people investment and technical credibility as a trade-off. I've owned architecture and set engineering standards as a CTO, and I chaired a ~50-engineer best-practices workgroup at Panasonic — ADRs, incident playbooks, blameless post-mortems — while still shipping and reviewing code myself. Player-coach isn't a stretch for me; it's how I already work.",
		],
		requirements: [
			{
				ask: "Hands-on technical lead / player-coach — lead the team and ship",
				proof:
					"CTO at CrewCapable, sole engineer taking a platform PoC → production in <10 months; chaired a ~50-engineer best-practices workgroup at Panasonic (ADRs, incident playbooks, blameless post-mortems) while still writing and reviewing code.",
			},
			{
				ask: "Strong TypeScript / Node.js backend + React frontend, full stack",
				proof:
					"CrewCapable is a TypeScript Turborepo monorepo — web, backend services, and shared packages. Ledgerline and Rentinity are React/TypeScript.",
			},
			{
				ask: "Event-driven pipelines, task orchestration, async workflows",
				proof:
					"CrewCapable's LLM extraction runs on AWS Lambda + Step Functions with a document-processing state machine (explicit failure/timeout paths). Ledgerline is built on a transactional outbox and an event-sourced ledger with exactly-once delivery.",
			},
			{
				ask: "AI/ML and OCR-based document processing integration",
				proof:
					"CrewCapable ingests customer POs from email, PDF, and Excel and turns them into ERP-ready orders via an LLM extraction pipeline — a document submission-and-processing platform. Foodie Folder does GPT-vision menu OCR.",
			},
			{
				ask: "AWS across core services (EC2, ECS/ECR/EKS, S3, IAM, SSM), containers, IaC",
				proof:
					"CrewCapable runs on AWS serverless; I cut ~30% off AWS spend at Panasonic through Cost Explorer discipline. Consolo and Snifter are Lambda/SNS/SQS developer tools I built and published.",
			},
			{
				ask: "Own and improve CI/CD (GitHub Actions), observability",
				proof:
					"Deploy-on-push pipelines with auto-migrations on CrewCapable and Hagglebot; this portfolio deploys through its own verified pipeline. I've built CI across GitHub Actions, GitLab CI, and CircleCI.",
			},
			{
				ask: "PostgreSQL — schema design, transactional workflows, migrations",
				proof:
					"Hagglebot uses async Postgres with SQLModel and Alembic migrations; CrewCapable uses per-tenant row-level security. Ledgerline's whole point is transactional correctness.",
			},
			{
				ask: "Security, authentication, authorization for regulated environments",
				proof:
					"Production identity/auth with AWS Cognito, Supabase Auth (Google OAuth), and JWT. shush is a security tool I built for high-assurance automation: an LLM can only run allowlisted commands, enforced in two independent layers. CrewCapable enforces per-tenant RLS.",
			},
			{
				ask: "12+ years full stack; formally or informally led a team",
				proof:
					"~25 years shipping production systems; CTO; chaired a cross-team workgroup of ~50 engineers with ownership of team-level outcomes.",
			},
			{
				ask: "Platform modernization / significant tech-debt reduction",
				proof:
					"At Panasonic: self-hosted SonarQube rollout, >50% unit-test-coverage gains, and the ~30% infra cost reduction. At CrewCapable: a brittle PoC rebuilt into a scalable production platform.",
			},
		],
		highlight: [
			"https://app.crewcapable.com/psc",
			"/case-studies/ledgerline",
			"/hagglebot",
			"/shush",
			"/consolo",
			"/snifter",
			"/devops",
			"/case-studies/hvac-moisture-platform",
		],
		gaps: [
			{
				label: "Keycloak",
				note: "I've run identity and auth in production with AWS Cognito, Supabase Auth (OAuth), and JWT. Keycloak is the same problem shape — I'd be productive in it quickly.",
			},
			{
				label: "Public Trust clearance",
				note: "Able to obtain and maintain. No current clearance.",
			},
			{
				label: "Federal domain",
				note: "My regulated-environment experience is enterprise and multi-tenant — per-tenant RLS, security-first design — rather than federal. The platform shape transfers directly.",
			},
		],
		cvHref: "/cv/cv.pdf",
		email: "published_cv@cxcs.us",
	},
];

export function pitchForSlug(slug: string | undefined): JobPitch | undefined {
	return jobPitches.find((p) => p.slug === slug);
}
