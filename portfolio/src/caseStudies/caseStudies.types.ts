// Case study data model.
//
// REDACTION CONTRACT — read before adding an entry.
//
// These write-ups cover client work performed under NDA or under an unsigned
// SOW. An entry may describe MY engineering: the architecture I chose, the
// invariants I enforced, the trade-offs I made. An entry may NOT carry:
//
//   1. The client's legal or trading name, their staff's names, their domains,
//      logos, subdomains, or internal table/service names.
//   2. Contract terms — rates, quotes, timelines, payment structure.
//   3. The client's proprietary methodology, or any reconstruction/inference of
//      it, however hedged.
//   4. Any catalog of the client's production weaknesses. A named company's
//      vulnerabilities do not become publishable by removing the name; the
//      stack fingerprint identifies them anyway.
//
// Rule of thumb: if the sentence is only interesting because of WHO the client
// was, cut it. What is publishable is what I would have built for anyone.

export interface CaseStudyPrototype {
	/** "live" renders a launch link; "planned" renders a disabled note. */
	state: "live" | "planned";
	href?: string;
	/** Shown for state: "planned" — why it isn't clickable yet. */
	note?: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	/** Redacted descriptor, never a name. e.g. "A regional HVAC consultancy". */
	client: string;
	sector: string;
	period: string;
	/** CSS gradient for the card face — no client imagery is used anywhere. */
	accent: string;
	/** Short verdict shown on the card and under the title. */
	status: string;
	/** One-sentence card blurb. */
	summary: string;
	problem: string;
	approach: string[];
	/** The engineering decision worth remembering. Optional but preferred. */
	decision?: { title: string; body: string };
	stack: string[];
	outcome: string;
	prototype?: CaseStudyPrototype;
	/** Set for public, non-redacted work that lives elsewhere. */
	external?: { href: string; label: string };
}
