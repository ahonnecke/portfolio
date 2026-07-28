import { Link, useParams } from "react-router-dom";
import { WorkCard } from "../work/WorkCard";
import { type WorkItem, workItems } from "../work/work.data";
import "./jd.css";
import { pitchForSlug } from "./jd.data";

export function JdLanding(): JSX.Element {
	const { slug } = useParams<{ slug: string }>();
	const pitch = pitchForSlug(slug);

	if (!pitch) {
		return (
			<div className="jdPage">
				<h1>Page not found</h1>
				<p>
					<Link to="/">Back to the portfolio</Link>
				</p>
			</div>
		);
	}

	const featured = pitch.highlight
		.map((to) => workItems.find((w) => w.to === to))
		.filter((w): w is WorkItem => Boolean(w));

	return (
		<div className="jdPage">
			<header className="jdHero">
				<p className="jdEyebrow">
					For {pitch.company} · {pitch.role}
				</p>
				<h1>{pitch.headline}</h1>
				<p className="jdMeta">{pitch.meta}</p>
			</header>

			<section className="jdIntro">
				{pitch.intro.map((para) => (
					<p key={para.slice(0, 24)}>{para}</p>
				))}
			</section>

			<section className="jdSection">
				<h2>What you asked for — where I've shipped it</h2>
				<div className="jdReqs">
					{pitch.requirements.map((r) => (
						<div className="jdReq" key={r.ask}>
							<div className="jdAsk">{r.ask}</div>
							<div className="jdProof">{r.proof}</div>
						</div>
					))}
				</div>
			</section>

			<section className="jdSection">
				<h2>Selected work for this role</h2>
				<div className="csGrid">
					{featured.map((w) => (
						<WorkCard key={w.to} item={w} />
					))}
				</div>
			</section>

			<section className="jdSection">
				<h2>Honest fit</h2>
				<div className="jdGaps">
					{pitch.gaps.map((g) => (
						<div className="jdGap" key={g.label}>
							<span className="jdGapLabel">{g.label}</span>
							<span className="jdGapNote">{g.note}</span>
						</div>
					))}
				</div>
			</section>

			<section className="jdCta">
				<a
					className="jdBtn"
					href={pitch.cvHref}
					target="_blank"
					rel="noreferrer"
				>
					Download my CV
				</a>
				<a className="jdBtn jdBtnGhost" href={`mailto:${pitch.email}`}>
					Email me
				</a>
				<Link className="jdCtaLink" to="/">
					See the full portfolio →
				</Link>
			</section>
		</div>
	);
}

export default JdLanding;
