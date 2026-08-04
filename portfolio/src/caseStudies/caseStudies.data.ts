import type { CaseStudy } from "./caseStudies.types";

// See caseStudies.types.ts for the redaction contract these entries follow.

export const caseStudies: CaseStudy[] = [
	{
		slug: "hvac-moisture-platform",
		title: "Moisture-Aware HVAC Sizing Platform",
		client: "A regional HVAC engineering consultancy",
		sector: "HVAC / Building Science",
		period: "2025–2026",
		accent: "linear-gradient(135deg, #0f3b4c 0%, #1d6f7a 55%, #2fa8a0 100%)",
		status: "Clickable prototype",
		summary:
			"A sizing tool that treats humidity as a first-class constraint, architected so the client's proprietary calculation methodology stayed on their side of a hard interface boundary.",
		problem:
			"In humid climates, equipment sized purely for sensible load can hold a house at 72°F and still sit at 65% relative humidity — comfortable to the thermostat, and a mold problem in the walls. Oversized equipment short-cycles and never runs long enough to condense moisture out. The standard Manual J → Manual S path stops before it answers the question that actually matters, so the tooling built on top of it does too.",
		approach: [
			"Modeled an explicit pints-per-day moisture balance — water in from occupants, cooking, infiltration, and ventilation against water out via latent removal, dehumidification, and exhaust — and made a pass/fail humidity verdict a first-class output rather than a footnote.",
			"Built the workflow end to end: project setup, ASHRAE design conditions resolved by ZIP, Manual J loads entered per dwelling unit, then ventilation, equipment, and moisture strategies selected per project.",
			"Ranked candidate equipment packages good/better/best against the moisture verdict, so the recommendation was defensible rather than a single opaque answer.",
			"Generated PDF reports and kept a full audit trail of every calculation, so a result could be reconstructed months later.",
		],
		decision: {
			title: "The calculation engine was a boundary, not a feature",
			body: "The client's sizing methodology was their entire commercial moat, and they were explicit that it stayed theirs. Rather than treat that as a blocker, I made it the load-bearing architectural decision: the calculation engine sits behind an abstract interface with a documented contract and a placeholder implementation derived only from published ASHRAE, ACCA, and RESNET material. Their engine was always meant to drop in behind that interface — and I never implemented it. The result is a platform that is complete, tested, and demonstrably free of their intellectual property, because the seam was designed in from the first commit rather than sawed in afterward. Every sizing assumption in the placeholder traces to a public standard, and that provenance is written down.",
		},
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"PostgreSQL",
			"JWT auth",
			"Zod",
			"Python (calc engine)",
			"PDFKit",
			"Vitest",
			"Docker",
			"GitHub Actions",
		],
		outcome:
			"The platform reached a working, tested, deployable state — authentication, projects, per-unit calculations, package comparison, audit trail, and report generation, with the full suite green. The engagement did not convert; the client's circumstances changed before the methodology behind the interface was ever delivered. Because the IP boundary was architectural rather than aspirational, the surrounding platform remained cleanly mine, and it continues as an independent product.",
		prototype: {
			state: "live",
			href: "https://hvac3.fly.dev/",
		},
	},
	{
		slug: "ledgerline",
		title: "Playable Insurance Money-Path Architecture",
		client: "An insurance technology company",
		sector: "Insurtech / Payments",
		period: "2026",
		accent: "linear-gradient(135deg, #2a1a4a 0%, #4b2d7f 55%, #8b5cf6 100%)",
		status: "Clickable prototype",
		summary:
			"Rather than mock up screens, I made the architecture itself playable — flip a failure on, bind a policy anyway, and watch the transactional outbox hold the line.",
		problem:
			"A prospective engagement wanted evidence that I understood reliability and correctness in a system that moves money. A UI clone proves nothing — anyone can draw a quote form. Claims about idempotency, atomicity, and delivery guarantees are equally cheap when they're prose in a document. The real problem was one of demonstration: how do you make an architectural argument that a reader can falsify?",
		approach: [
			"Built the product flow — quote, underwrite, bind, ledger — as a real, working path rather than a sequence of static screens.",
			"Put a live System Inspector permanently on screen next to it: the outbox table, the double-entry general ledger, the event log, and a connection-pool gauge, all updating as you use the product.",
			"Added chaos toggles that let a visitor break the system on purpose — take the downstream ERP offline, force a payment decline — then act anyway and watch the consequences propagate.",
			"Backed the whole thing with an in-memory event-sourced store and a simulated clock, so retries and backoff play out in seconds instead of minutes, with no backend to provision.",
			"Wrote a headless verification script covering the money paths and chaos scenarios, so the invariants were machine-checked rather than asserted.",
		],
		decision: {
			title: "Make the invariants falsifiable, not narrated",
			body: "The prototype exists to let someone disprove four claims by trying. Binding a policy is one atomic transaction — the policy row, the ledger entries, and the outbox row commit together or not at all. Underwriting gates the bind before any money moves. The transactional outbox gives exactly-once delivery downstream: take the ERP offline, bind anyway, watch the outbox back up and retry with backoff, bring the ERP back, watch it drain and reconcile. Hit redeliver on an already-completed event and watch the duplicate get suppressed. And the database — not the downstream ERP — is the system of record, which is what makes the other three survivable. A visitor can attack each of those in the browser. That's the point: an argument you can't test is just a claim.",
		},
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind",
			"shadcn/ui",
			"Zustand",
			"Event-sourced in-memory simulation",
			"Headless verification harness",
		],
		outcome:
			"Built, machine-verified, and screenshot-checked across every route. The engagement did not convert. The simulation core is worth more than the pitch was: it's a reference implementation of the transactional-outbox pattern with a double-entry ledger attached, and it's being extracted into a standalone open-source project.",
		prototype: {
			state: "live",
			href: "/prototypes/ledgerline/",
		},
	},
	{
		slug: "tariff-refund-analyst",
		title: "Tariff Refund Claim Analyst",
		client: "An independent customs and trade consultant",
		sector: "Trade Compliance",
		period: "2026",
		accent: "linear-gradient(135deg, #4a2c10 0%, #8a5215 55%, #d99a2b 100%)",
		status: "Working prototype",
		summary:
			"An assistant that reads a vendor's explanation of why your tariff refund isn't happening and tells you which parts are true.",
		problem:
			"When tariff refund eligibility shifts, importers are told by vendors that a refund isn't available, isn't owed, or isn't worth pursuing. Some of those answers are correct, some are outdated, and some are simply convenient. The asymmetry is expertise: the vendor has customs specialists and the importer's procurement team does not, so a misleading answer usually ends the conversation.",
		approach: [
			"Took vendor correspondence as the input — paste what they actually sent you, rather than filling in a form about your situation.",
			"Separated the claim into what is accurate, what is misleading or stale, and what to ask next, so the output is a negotiating position rather than a verdict.",
			"Grounded the analysis in a fact-checked rules baseline built with the consultant, and kept an evaluation rubric so the tool's answers could be scored rather than trusted.",
		],
		stack: [
			"TypeScript",
			"React",
			"LLM analysis pipeline",
			"Evaluation rubric",
		],
		outcome:
			"The analyzer was built to the consultant's specification and a public landing page went up to gauge demand. It was never validated against real cases, and the work stopped there — the domain moves fast enough that an unvalidated tool is a liability rather than an asset.",
		prototype: {
			state: "planned",
			note: "A waitlist landing page is public; the analyzer itself is not exposed, since it hasn't been validated against real claims.",
		},
	},
	{
		slug: "embedded-laser-recovery",
		title: "Config Recovery on a Locked-Down Laser Control",
		client: "An industrial fiber-laser fabrication shop",
		sector: "Industrial Controls / Embedded Linux",
		period: "Onsite engagement",
		accent: "linear-gradient(135deg, #17171c 0%, #3d1210 52%, #cf2b22 100%)",
		status: "Recovered onsite, no downtime",
		summary:
			"A field technician needed network and machine parameters off a hardened laser control whose GUI wouldn't boot — I pulled everything he needed from the bare Linux console, without restarting the machine or touching the HMI.",
		problem:
			"A field technician servicing an industrial fiber-laser cutter needed the machine's networking configuration and machine-specific laser parameters off its embedded Linux control. The graphical environment he normally worked in wouldn't start, and he was GUI-only by background — no file manager, no editor, no way to browse for the files. The control itself was a hardened embedded appliance: read-only root filesystem, stripped-down userland, no package manager, no internet, and no public documentation below the HMI layer. Several of the obvious assumptions — that the USB stick was mounted, that a permissions error meant a permissions problem — turned out to be wrong, so the real risk was burning hours acting on a false premise.",
		approach: [
			"Established ground truth from primary sources before acting. The USB stick that looked mounted wasn't — /proc/self/mounts, the kernel's own table, settled it in one command; an apparent permissions error was really the read-only root filesystem; a \"missing\" binary was actually present. Verifying each assumption killed a chain of work that would otherwise have been built on a false premise.",
			"Root-caused the GUI failure instead of fighting it. X11 aborted because the vendor had stripped the keymap data the HMI didn't need, so xkb couldn't compile a keymap at startup — an image gap with no config workaround. Confirming that quickly closed off hours of dead-end troubleshooting.",
			"Treated the bare console as the working environment rather than trying to repair X (impossible without writable storage or a package manager), composing every command around a JIS keyboard with no keymap loaded — no underscore, no pipe typeable — using file redirection in place of pipes and tab completion in place of literal paths.",
			"Recovered the networking details by reading the machine's own configuration on disk rather than probing a live industrial control's network stack. On an isolated, non-routed /16 the addresses a control talks to are written down somewhere; a recursive search through the system and vendor config directories found them without scanning a 65,000-address space.",
			"Mounted the USB stick on writable temporary storage — the read-only rootfs ruled out a mount point under /mnt — and completed the transfer from there.",
		],
		decision: {
			title: "Don't turn a data pull into an outage",
			body: "The two decisions that mattered most were about what not to do. I declined to restart or relaunch the HMI: on a fiber laser the interface is the operator's window into interlocks, shutter state, and assist gas, and a failed restart on a control with a read-only rootfs and no recovery documentation risks converting a data-retrieval task into an outage on a machine that bills by the hour. And I stopped port-scanning the moment it was clear the target was the laser's own control PC — the information was available from configuration on disk, so probing a live industrial control's network services had real downside and no upside. The job was to get the technician his data and leave the machine exactly as I found it.",
		},
		stack: [
			"Embedded Linux",
			"X11 / xkb",
			"/proc (mounts, partitions, net/arp)",
			"USB mount recovery",
			"Read-only root filesystem",
		],
		outcome:
			"The technician got the networking configuration and the machine-specific laser parameters he came for, copied off to removable media. The machine was never restarted, the HMI was never touched, and nothing on the control's persistent storage was modified.",
	},
];

// Public, named, non-redacted work. Rendered in the same section but links out
// rather than to a redacted write-up.
export const externalCaseStudy: CaseStudy = {
	slug: "crewcapable",
	title: "CrewCapable",
	client: "CrewCapable",
	sector: "Manufacturing / ERP Automation",
	period: "2025–Present",
	accent: "linear-gradient(135deg, #0b2b3c 0%, #12566e 55%, #2b9fd4 100%)",
	status: "Shipped · in production",
	summary:
		"Sole engineer taking a greenfield B2B order-automation platform from proof of concept to production. CrewCapable's own customer case study covers the outcome at a corrugated plant.",
	problem: "",
	approach: [],
	stack: [],
	outcome: "",
	// Points at CrewCapable's published customer case study rather than a
	// redacted write-up — it's their story to tell, and they've told it.
	external: {
		href: "https://app.crewcapable.com/psc",
		label: "Read the case study on crewcapable.com",
	},
};
