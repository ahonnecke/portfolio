const YEAR = "2026";

/** Rights + redaction notice. Rendered on the index and on every write-up. */
export function CaseStudyRights(): JSX.Element {
	return (
		<aside className="csRights">
			<p>
				<strong>© {YEAR} Ashton Honnecke. All rights reserved.</strong> The
				prototypes, architecture, source code, diagrams, and written analysis
				presented in these case studies are my original work and remain my
				intellectual property. They are published here for portfolio and
				evaluation purposes only. No licence is granted to copy, redistribute,
				or create derivative works from them.
			</p>
			<p>
				Client names, branding, personnel, commercial terms, and proprietary
				methodology have been withheld. Where an engagement placed material
				under confidentiality, that material is not reproduced here in any form
				— redacted, paraphrased, or reconstructed. Anything shown is either my
				own work product or derived from published industry standards.
			</p>
		</aside>
	);
}
