// Single source of truth for Ashton Honnecke's CV.
// Edit here; the web page, PDF exports, and JSON Resume artifact all derive
// from this file. See resume.types.ts for the schema and variant.ts for
// per-variant projection.

import type { Resume } from "./resume.types";

export const resume: Resume = {
	contact: {
		name: "Ashton Honnecke",
		email: "published_cv@cxcs.us",
		website: "https://ashton.honnecke.us",
		linkedin: "https://www.linkedin.com/in/ashtonhonnecke/",
		github: "https://github.com/ahonnecke/",
		location: "Denver, CO",
	},

	tagline: {
		cto: "Engineering Leader • CTO • Cloud Architecture • AI-Native SaaS",
		ic: "Senior Software/Cloud Engineer • Python • AWS • DevOps",
	},

	highlights: {
		cto: [
			"Engineering leader with ~25 years building and scaling production systems; fluent from low-level systems detail to business outcomes.",
			"AI-native engineering leadership: shipped a greenfield B2B SaaS (CrewCapable) from zero to production pilot in <10 months as solo founder-engineer, directing LLM-accelerated development with senior-level architectural judgment.",
			"Cost and quality leadership at scale: ~30% AWS infrastructure reduction and >50% unit-test coverage gains at Panasonic via Cost Explorer discipline and self-hosted SonarQube rollout.",
			"Chaired cross-team best-practices workgroup (~50 engineers) at Panasonic; authored ADRs, incident playbooks, and blameless post-mortem process.",
			"Public speaker (PyColorado, PyDEN) and active open-source maintainer (PyPI: Consolo, Snifter, Jolly Brancher).",
		],
		ic: [
			"Self-motivated engineer focused on maintainable, reusable code and pragmatic delivery.",
			"Operates comfortably from low-level systems detail to high-level business outcomes.",
			"Clear communicator (written & verbal); results-driven and collaborative.",
			"Experience running/serving extremely high-scale, public-facing web properties.",
			"Speaker: PyColorado — Cleaning Up Your Python Environment: Superfund Site.",
			"Speaker: PyDEN — The Value of Linting.",
		],
	},

	work: [
		{
			company: "CrewCapable AI",
			position: "Chief Technology Officer",
			period: "2025–Present",
			startYear: 2025,
			endYear: null,
			expertise: {
				cto: "AI-native SaaS strategy, AWS serverless, LLM extraction pipelines, supply-chain/manufacturing domain, EDI/ERP integration",
				ic: "TypeScript, Python, Next.js 15, React 19, AWS CDK, Lambda, Step Functions, Postgres/Supabase, LLM extraction, Zod, Vitest, LocalStack, EDI X12",
			},
			highlights: {
				cto: [
					"Owned end-to-end technology strategy for a greenfield AI-native B2B SaaS (supply-chain / manufacturing); took platform from zero to production pilot in under 10 months as single founder-engineer with ~3 active contributors.",
					"Partnered directly with the founding business team on roadmap, architecture, hiring, and vendor strategy; converted a manual purchase-order intake workflow into an API-driven, human-in-the-loop product.",
					"Demonstrated AI-native engineering leadership at production scale: ~3,455 commits / ~112k LOC TypeScript / 94 test files in 10 months — senior-team-scale output via LLM-accelerated development, directed with ~25 years of systems depth.",
					"Designed fully serverless AWS architecture on CDK: 10 Lambda functions + Step Functions workflow orchestrating OCR / extraction / reconciliation across S3, Textract, EventBridge, SNS, Secrets Manager.",
					"Architected multi-provider LLM document-extraction pipeline (OpenAI, Gemini, Mistral, Tesseract, Textract) with Zod-typed schemas and an immutable audit trail — defensible for enterprise audit and ERP export.",
					"Shipped production integrations with 3 ERPs (Amtech DAT over SFTP, Epicor P21, QuickBooks) and outbound X12 850 EDI, replacing manual data entry for the pilot customer.",
					"Chose serverless-first, managed-database stack (Lambda + Supabase + Vercel) to keep cloud spend proportional to document volume and eliminate idle infrastructure cost.",
					"Established engineering conventions (LLM-optimized code patterns, strict typing, per-tenant RLS) across a Turborepo / pnpm monorepo spanning web, backend, and 5 shared packages.",
				],
				ic: [
					"Greenfield AI-native SaaS for corrugated packaging purchase-order intake: OCR + LLM extraction + human-in-the-loop review + automated ERP/EDI export; production pilot in under 10 months.",
					"Fully serverless AWS architecture on CDK: 10 Lambda functions; Step Functions workflow orchestrating OCR/extraction/reconciliation; event-driven integration across S3, Textract, EventBridge, SNS, Secrets Manager.",
					"Split infrastructure into 4 independently deployable CDK stacks (core backend, audit, ERP, management) to isolate blast radius and enable per-tenant rollout.",
					"Next.js 15 / React 19 frontend backed by ~86 typed API routes; Postgres (Supabase) with row-level security on every tenant-scoped table.",
					"Multi-provider LLM document-extraction pipeline (OpenAI, Gemini, Mistral, Tesseract, Textract) with Zod-typed schemas; immutable audit trail separating raw model output from human-reviewed values.",
					"Document-processing state machine handling PDF, DOCX, image, and email-attachment intake with explicit failure and timeout paths.",
					"~112k LOC TypeScript behind 94 test files (Vitest, Testing Library, LocalStack integration, ERP golden-file contract tests); 8 GitHub Actions workflows covering type checks, migration linting, ERP regression.",
					"Strict end-to-end type safety: branded domain types, Zod validation at every boundary, generated Supabase types; Biome + ESLint + Ultracite enforced in CI.",
					"123 forward-only Postgres migrations with automated migration linting in CI to prevent environment drift.",
					"Per-Lambda CloudWatch alarms, state-machine failure alerts, commit-SHA logging on Lambda cold start, /api/version endpoint for incident-to-revision traceability.",
					"AWS Secrets Manager + per-Lambda IAM scoping + RLS on every customer-data table — no shared service accounts across tenants.",
					"Production integrations: Amtech DAT (SFTP), Epicor P21, QuickBooks, outbound X12 850 EDI; Stripe billing, Supabase Auth with Google OAuth, PostHog analytics, SES-based email intake.",
					"Turborepo / pnpm monorepo spanning web, backend, and 5 shared packages with LLM-optimized single-concern file markers.",
				],
			},
		},
		{
			company: "Panasonic North America",
			position: "Lead Cloud Engineer",
			period: "2020–2025",
			startYear: 2020,
			endYear: 2025,
			expertise: {
				cto: "AWS cloud architecture, V2X/OBU telematics (SAE J2735), cost optimization, code-quality tooling, ADRs, incident management",
				ic: "Python, boto3, Bash, AWS (Lambda, SQS, SNS, Fargate, S3, CloudWatch, Cost Explorer), SonarQube, Docker, V2X/OBU telematics, SAE J2735 (DSRC), edge devices",
			},
			highlights: {
				cto: [
					"Chaired cross-team best-practices workgroup across ~50 engineers (OO, SOLID, security, code quality); raised org-wide standards and mentored developers.",
					"Drove ~30% reduction in AWS infrastructure cost via Cost Explorer analysis, tagging discipline, and decommissioning of unused resources.",
					"Led self-hosted SonarQube rollout → >50% unit-test coverage gains across multiple languages; gave leadership visibility into code-quality trends.",
					"Authored ADRs for event-driven/serverless and serverful (Fargate) cloud architectures; authored incident playbooks end-to-end (classification → response → blameless post-mortem).",
					"Shipped V2X messaging deployment for a Utah snowplow fleet; worked with the SAE J2735 DSRC Message Set Dictionary (industry-standard V2X wire format) in the OBU/telematics data path.",
					"Designed and released three open-source developer tools on PyPI (Consolo, Snifter, Jolly Brancher) to reduce cloud-native iteration time across the org.",
				],
				ic: [
					"Chaired cross-team best-practices workgroup (~50 engineers) on OO, SOLID, code quality, and security; mentored developers across the org.",
					"Authored ADRs for event-driven/serverless and long-running serverful (Fargate) cloud-native architectures.",
					"Authored end-to-end incident playbooks: classification → response → resolution → blameless post-mortem.",
					"Built a near-real-time OBU ingress pipeline on Lambda/SQS/SNS with horizontal scale; worked with SAE J2735 DSRC messages in the data path; provisioned for throughput headroom not exercised in production.",
					"Shipped V2X messaging deployment for a Utah snowplow fleet; worked on edge devices, packet sniffing, and hardware↔cloud integration.",
					"Designed and released internal developer tooling as open-source on PyPI: hot Lambda filesystem mounting (Consolo), CLI SNS inspection (Snifter), Jira↔Git forge integration (Jolly Brancher).",
					"Delivered artifact build pipeline reducing build time and cost.",
					"Identified and decommissioned unused AWS resources via Cost Explorer and tagging discipline → up to ~30% infrastructure savings.",
					"Drove self-hosted SonarQube rollout across the org → >50% unit-test coverage gains across multiple languages.",
				],
			},
		},
		{
			company: "Digital Assets Data",
			position: {
				cto: "Blockchain Tech Lead / Sr. Software Engineer",
				ic: "Sr. Software Engineer / Blockchain Tech Lead",
			},
			period: "2018–2020",
			startYear: 2018,
			endYear: 2020,
			expertise: {
				cto: "Tech-lead leadership, AWS serverless, BTC/ETH nodes, on-call ownership, hiring",
				ic: "Python, Django, React, Pandas, Docker, AWS (Lambda, API Gateway, S3, CloudWatch, ECS), Google BigQuery, CircleCI, BTC/ETH nodes, smart contracts",
			},
			highlights: {
				cto: [
					"Technical lead for blockchain track (1 direct report, team of 2 at peak); owned on-call playbooks and actively contributed to hiring for the blockchain team.",
					"Built AWS ingestion pipelines (S3/CloudWatch/Lambda/ECS) processing 100 GB nightly with 30 GB individual files, serving institutional-grade on-chain BTC/ETH datasets.",
					"Implemented Lambda + API Gateway microservices for cryptographic decoding at high throughput.",
					"Standardized CI across the team (CircleCI fan-out workflows, linting, unit testing, git hooks); containerized every stack with Docker.",
					'Restructured deploys from a manual multi-stage process into a single "push-button" script.',
				],
				ic: [
					"Built Python microservices to extract on-chain BTC/ETH data directly from cloud-hosted nodes (low-latency ingest; pandas; scheduled CloudWatch Events).",
					"Implemented Lambda + API Gateway microservices for cryptographic decoding at very high throughput.",
					"AWS ingestion pipelines on S3, CloudWatch Events, Lambda, and ECS — processed 100 GB nightly with individual files up to 30 GB.",
					"Worked with Google BigQuery to extract, normalize, and ingest Bitcoin and Ethereum datasets.",
					"Implemented QR-code TOTP multi-factor authentication in Django/React; hardened and containerized blockchain nodes across per-env configurations.",
					'"Fan-out" CircleCI workflows to parallelize PR tests; standardized unit testing + linting; containerized every stack with Docker.',
					"Automated external-library dependency PRs with integration checks against external APIs in the PR test flow only.",
					"Tech lead with 1 direct report (blockchain team of 2 at peak); owned on-call playbooks (VictorOps, OpsGenie); performed many interviews.",
					"Built centralized unhandled-exception capture/logging and uptime monitoring across multiple projects and languages.",
					'Restructured deploys into a single "push-button" script; wrote and distributed git hooks for linting, typing, and stylistic cohesion.',
				],
			},
		},
		{
			company: "Havenly",
			position: "Senior Software Engineer",
			period: "2015–2017",
			startYear: 2015,
			endYear: 2017,
			expertise: {
				cto: "Greenfield data-ingest systems, horizontal scaling, queued architectures",
				ic: "PHP, CakePHP 2/3, Linux, Git, SQL, queued-ingest systems, data modeling",
			},
			highlights: {
				cto: [
					"Most senior engineer on the data-ingest initiative within an ~8-person team; designed and shipped a greenfield horizontally scalable queued system ingesting 7M+ rows/day from 25+ sources in 15 formats.",
				],
				ic: [
					"Most senior engineer on the data-ingest initiative within an ~8-person team; designed and shipped a greenfield, horizontally scalable queued data-feed system: 7M+ rows/day from 25+ sources in 15 formats.",
					"Built decoupled pipeline: raw retention (traceability/replay) → transform/validate/store → push to external API with faceted fuzzy search.",
					"Authored CakePHP2 → CakePHP3 migration plan; refactored into OO Components and Behaviors (CakePHP's mixins/traits) to enable encapsulation and unit testability.",
				],
			},
		},
		{
			company: "Colorado State University Global Campus",
			position: "Systems Architect (pro tem)",
			period: "2014–2015",
			startYear: 2014,
			endYear: 2015,
			expertise: {
				cto: "Architecture leadership, SDLC, data modeling",
				ic: "Linux, PHP, SQL, data modeling, SDLC, pentesting, Git, SSH",
			},
			highlights: {
				cto: [
					"Covered a vacated architecture-leadership seat (director-level scope); led 1 engineer on architecture and SDLC for student-facing systems (portal, registration, transcripts).",
				],
				ic: [
					"Covered a vacated architecture-leadership role at CSU Global (director-level scope); led 1 engineer, owned architecture and SDLC for student portal, course registration, and transcript systems.",
				],
			},
		},
		{
			company: "Pixelstub Consulting",
			position: "Founder",
			period: "2009–Present",
			startYear: 2009,
			endYear: null,
			expertise: {
				cto: "Independent consulting, full-stack delivery, LLM-driven extraction",
				ic: "Linux, PHP, JavaScript, SQL, SDLC, pentesting, Git, SSH, LLM extraction pipelines",
			},
			highlights: {
				cto: [
					"Founder of a profitable freelancing LLC operating alongside W-2 leadership roles; recent work includes an LLM-driven image-to-structured-data pipeline for menu ingestion that foreshadowed the extraction architecture at CrewCapable.",
				],
				ic: [
					"Founder of a long-running independent consultancy (profitable when actively engaged); broad tech-stack engagements across web, mobile, data, and DevOps.",
					"Built an LLM-driven image-to-structured-data pipeline for menu data ingestion (picture → structured records).",
				],
			},
		},
		{
			company: "Photobucket",
			position: "Software Engineer → Senior Software Engineer",
			period: "2005–2009",
			startYear: 2005,
			endYear: 2009,
			expertise: {
				cto: "Payments, trust & safety tooling, consumer-scale web",
				ic: "PHP, MVC frameworks, PayPal API, credit-card payments, trust & safety tooling, AJAX, CI, MySQL",
			},
			highlights: {
				cto: [
					"Engineer at Photobucket during its peak-traffic era (top-50 global web property, ~100M users); promoted SWE → Sr SWE on full ownership of payments and internal tooling.",
					"Built trust & safety reporting pipeline: tool that packaged offensive content and transmitted to the National Center for Missing & Exploited Children (NCMEC) — proactive law-enforcement integration that contributed to multiple predator arrests.",
				],
				ic: [
					"W-2 engineer at Photobucket during its peak-traffic era (widely reported as top-50 global web property, ~100M users); promoted SWE → Sr SWE based on full ownership of internal tooling.",
					"Built trust & safety reporting pipeline: tool that packaged offensive content and transmitted to the National Center for Missing & Exploited Children (NCMEC); contributed to multiple predator arrests via proactive law-enforcement integration.",
					"Owned payments (PayPal + credit-card processing, reconciliation) and account-management tooling used for legal/compliance archival.",
					"Created a Propel-like model code-generation system with unit tests; migrated raw PHP pages to an MVC framework for internal tools.",
					"Introduced CI and unit testing into the team's workflow; mentored engineers on design, flow, and integration.",
					"Built an AJAX-based status/exception display system for consistent UX, surfacing caught DB exceptions.",
				],
			},
		},
	],

	skills: [
		"Software development across multiple languages, frameworks, and stacks (~25 yrs).",
		"Linux/Unix administration (~20 yrs); DevOps (cloud & colo) (~10 yrs).",
		"Startups (founder & early-stage) (~15 yrs), including profitable exits or profitability (~10 yrs).",
		"AI/LLM-native engineering (production LLM extraction pipelines, agent-directed development, multi-provider orchestration) (~1 yr production, ongoing).",
		"Blockchain (ETH/BTC nodes, data engineering) (~2 yrs).",
	],

	talks: [
		{
			title: "Cleaning Up Your Python Environment: Superfund Site",
			url: "https://www.youtube.com/watch?v=cpseEHA_haA",
			venue: "PyColorado",
			links: [
				{
					label: "Slides and Code",
					url: "https://github.com/ahonnecke/pycolorado2019",
				},
				{ label: "Video", url: "https://www.youtube.com/watch?v=cpseEHA_haA" },
			],
		},
		{
			title: "The Value of Linting",
			url: "https://www.meetup.com/PyDENCO/events/llxnlrybcdbkc/",
			venue: "PyDEN",
			links: [
				{
					label: "Materials",
					url: "https://github.com/ahonnecke/linting-talk",
				},
			],
		},
	],

	projects: [
		{
			name: "Consolo",
			url: "https://pypi.org/project/consolo/",
			summary: [
				'Hot-mount Lambda filesystems for rapid iteration; "hot reloading."',
			],
		},
		{
			name: "Snifter",
			url: "https://pypi.org/project/snifter/",
			summary: ["Fast SNS topic/message inspection from the CLI."],
		},
		{
			name: "Jolly Brancher",
			url: "https://pypi.org/project/jolly-brancher/",
			summary: [
				"Git/Jira helper: find tickets, create matching branches, enforce branch hygiene.",
			],
		},
	],

	education: [
		{
			institution: "University of Denver",
			studyType: "Master of Business Administration",
			period: "2004–2005",
			notes: ["Emphasis: Accounting"],
		},
		{
			institution: "University of Denver",
			studyType: "Bachelor of Computer Science",
			period: "2000–2004",
			notes: ["Minors: Mathematics, Philosophy"],
		},
	],

	profiles: [
		{
			network: "GitHub",
			url: "https://github.com/ahonnecke",
			username: "ahonnecke",
		},
		{
			network: "LinkedIn",
			url: "https://www.linkedin.com/in/ashtonhonnecke/",
			username: "ashtonhonnecke",
		},
	],

	interests:
		"I enjoy snowboarding, cooking, board games, reading, welding, electric bass, and a steady stream of hands-on projects. I love puzzles and problem-solving and contribute to open-source projects.",
};
