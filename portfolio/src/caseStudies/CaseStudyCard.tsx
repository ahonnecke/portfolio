import { Link } from "react-router-dom";
import type { CaseStudy } from "./caseStudies.types";

function CardFace({ study }: { study: CaseStudy }): JSX.Element {
	return (
		<span className="csCard" style={{ backgroundImage: study.accent }}>
			<span className="csCardSector">{study.sector}</span>
			<span className="csCardTitle">{study.title}</span>
			{/* Named public work is its own client — don't echo the title back. */}
			{study.client !== study.title && (
				<span className="csCardClient">{study.client}</span>
			)}
			<span className="csCardSummary">{study.summary}</span>
			<span className="csCardStatus">
				{study.status}
				{study.external ? " ↗" : ""}
			</span>
		</span>
	);
}

export function CaseStudyCard({ study }: { study: CaseStudy }): JSX.Element {
	if (study.external) {
		return (
			<a href={study.external.href} target="_blank" rel="noopener noreferrer">
				<CardFace study={study} />
			</a>
		);
	}
	return (
		<Link to={`/case-studies/${study.slug}`}>
			<CardFace study={study} />
		</Link>
	);
}
