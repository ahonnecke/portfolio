import { Link } from "react-router-dom";
import type { ProjectCardData } from "./projects.data";

function Face({ p }: { p: ProjectCardData }): JSX.Element {
	return (
		<span className="csCard" style={{ backgroundImage: p.accent }}>
			<span className="csCardSector">{p.tag}</span>
			<span className="csCardTitle">{p.title}</span>
			<span className="csCardSummary">{p.blurb}</span>
			{p.home && <span className="csCardStatus">{p.home}</span>}
		</span>
	);
}

export function ProjectCard({ p }: { p: ProjectCardData }): JSX.Element {
	// The CV PDF and the hosted demo are files/apps, not SPA routes — plain
	// anchors reach them; everything else routes to a detail page.
	if (p.to.endsWith(".pdf")) {
		return <a href={p.to}>{<Face p={p} />}</a>;
	}
	if (p.to.startsWith("/prototypes/")) {
		return (
			<a href={p.to} target="_blank" rel="noopener noreferrer">
				<Face p={p} />
			</a>
		);
	}
	return <Link to={p.to}>{<Face p={p} />}</Link>;
}
