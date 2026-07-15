import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyRights } from "./CaseStudyRights";
import { caseStudies, externalCaseStudy } from "./caseStudies.data";

export function CaseStudiesSection(): JSX.Element {
	return (
		<section className="csSection">
			<h2 className="csSectionHeading">Case Studies</h2>
			<p className="csSectionBlurb">
				Client prototypes — the architecture, the trade-offs, and what happened.
				Most of these were never bought. Client names, branding, and proprietary
				material have been removed; what's described is my own work.
			</p>
			<div className="csGrid">
				<CaseStudyCard study={externalCaseStudy} />
				{caseStudies.map((study) => (
					<CaseStudyCard key={study.slug} study={study} />
				))}
			</div>
		</section>
	);
}

export function CaseStudiesIndex(): JSX.Element {
	return (
		<div className="csIndexPage">
			<CaseStudiesSection />
			<CaseStudyRights />
		</div>
	);
}

export default CaseStudiesIndex;
