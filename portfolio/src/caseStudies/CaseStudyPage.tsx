import { Link, Navigate, useParams } from "react-router-dom";
import { CaseStudyRights } from "./CaseStudyRights";
import { caseStudies } from "./caseStudies.data";
import type { CaseStudyPrototype } from "./caseStudies.types";

// Old slugs that were renamed. Kept so previously-shared/indexed URLs still
// resolve instead of soft-404ing — they redirect to the current slug.
const SLUG_ALIASES: Record<string, string> = {
	"insurtech-reliability-sim": "ledgerline",
};

function PrototypeBlock({ proto }: { proto: CaseStudyPrototype }): JSX.Element {
	if (proto.state === "live" && proto.href) {
		return (
			<div className="csProto csProtoLive">
				<h2>Prototype</h2>
				<p>
					Opens in a new tab. It's a self-contained demo — no client systems,
					data, or proprietary logic are involved.
				</p>
				<a
					className="csProtoLaunch"
					href={proto.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					Launch the prototype ↗
				</a>
			</div>
		);
	}
	return (
		<div className="csProto csProtoPlanned">
			<h2>Prototype</h2>
			<p>{proto.note}</p>
		</div>
	);
}

export function CaseStudyPage(): JSX.Element {
	const { slug } = useParams<{ slug: string }>();

	if (slug && SLUG_ALIASES[slug]) {
		return <Navigate to={`/case-studies/${SLUG_ALIASES[slug]}`} replace />;
	}

	const study = caseStudies.find((entry) => entry.slug === slug);

	if (!study) {
		return (
			<div className="csPage">
				<h1>Case study not found</h1>
				<p>
					<Link to="/case-studies">Back to case studies</Link>
				</p>
			</div>
		);
	}

	return (
		<div className="csPage">
			<article className="csArticle">
				<div className="csHero">
					<span className="csHeroSector">{study.sector}</span>
					<h1>{study.title}</h1>
					<p className="csHeroMeta">
						{study.client} · {study.period} · {study.status}
					</p>
				</div>

				<section>
					<h2>The problem</h2>
					<p>{study.problem}</p>
				</section>

				<section>
					<h2>What I built</h2>
					<ul className="csApproach">
						{study.approach.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				{study.decision && (
					<section className="csDecision">
						<h2>{study.decision.title}</h2>
						<p>{study.decision.body}</p>
					</section>
				)}

				<section>
					<h2>Stack</h2>
					<ul className="csStack">
						{study.stack.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</section>

				<section>
					<h2>Outcome</h2>
					<p>{study.outcome}</p>
				</section>

				{study.prototype && <PrototypeBlock proto={study.prototype} />}

				<p className="csBack">
					<Link to="/case-studies">← All case studies</Link>
				</p>
			</article>
			<CaseStudyRights />
		</div>
	);
}

export default CaseStudyPage;
