// Web-first CV page. Reads the typed dataset, projects it to the selected
// audience variant (CTO/IC), and renders the layout. Variant selection is
// mirrored in the URL (?variant=ic) so a rendering is shareable. The
// downloadable PDF is built separately (Emacs/Org/XeLaTeX in ~/src/cv).

import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "./cv.css";
import { toJsonResume, toSchemaOrg } from "./jsonresume";
import { resume } from "./resume.data";
import type { ResolvedResume, Variant } from "./resume.types";
import { selectVariant } from "./variant";

function readVariant(raw: string | null): Variant {
	return raw === "ic" ? "ic" : "cto";
}

function Section({
	id,
	title,
	className,
	children,
}: {
	id: string;
	title: string;
	className?: string;
	children: React.ReactNode;
}): JSX.Element {
	return (
		<section id={id} className={`cv-section ${className ?? ""}`}>
			<h2 className="cv-section-title">{title}</h2>
			{children}
		</section>
	);
}

function ContactLine({
	contact,
}: { contact: ResolvedResume["contact"] }): JSX.Element {
	return (
		<p className="cv-contact">
			<a href={`mailto:${contact.email}`}>{contact.email}</a>
			<span className="cv-sep">|</span>
			<a href={contact.website} target="_blank" rel="noreferrer">
				{contact.website.replace(/^https?:\/\//, "")}
			</a>
			<span className="cv-sep">|</span>
			<a href={contact.linkedin} target="_blank" rel="noreferrer">
				LinkedIn
			</a>
			<span className="cv-sep">|</span>
			<a href={contact.github} target="_blank" rel="noreferrer">
				GitHub
			</a>
			<span className="cv-sep">|</span>
			<span>{contact.location}</span>
		</p>
	);
}

function WorkItem({
	work,
}: { work: ResolvedResume["work"][number] }): JSX.Element {
	return (
		<article className="cv-role">
			<header className="cv-role-head">
				<h3 className="cv-role-title">
					<span className="cv-company">{work.company}</span>
					<span className="cv-dash">—</span>
					<span className="cv-position">{work.position}</span>
				</h3>
				<span className="cv-period">{work.period}</span>
			</header>
			<p className="cv-expertise">
				<span className="cv-expertise-label">Subject Matter Expert:</span>{" "}
				{work.expertise}
			</p>
			<ul className="cv-bullets">
				{work.highlights.map((bullet) => (
					<li key={bullet}>{bullet}</li>
				))}
			</ul>
		</article>
	);
}

export default function CvPage(): JSX.Element {
	const [params, setParams] = useSearchParams();
	const variant = readVariant(params.get("variant"));
	const data = useMemo(() => selectVariant(resume, variant), [variant]);
	const jsonResume = useMemo(
		() => JSON.stringify(toJsonResume(resume, variant)),
		[variant],
	);
	const schemaOrg = useMemo(
		() => JSON.stringify(toSchemaOrg(resume, variant)),
		[variant],
	);

	const setVariant = (next: Variant): void => {
		setParams(next === "cto" ? {} : { variant: "ic" }, { replace: true });
	};

	return (
		<main className="cv" data-variant={variant}>
			{/* Machine-readable: JSON Resume + schema.org JSON-LD embedded for crawlers/LLMs */}
			<script
				type="application/json"
				id="cv-resume-json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted local JSON
				dangerouslySetInnerHTML={{ __html: jsonResume }}
			/>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted local JSON-LD
				dangerouslySetInnerHTML={{ __html: schemaOrg }}
			/>
			<header className="cv-header">
				<div className="cv-identity">
					<h1 className="cv-name">{data.contact.name}</h1>
					<p className="cv-tagline">{data.tagline}</p>
					<ContactLine contact={data.contact} />
				</div>
				<div className="cv-controls">
					<fieldset className="cv-toggle" aria-label="Résumé variant">
						<button
							type="button"
							className={variant === "cto" ? "is-active" : ""}
							aria-pressed={variant === "cto"}
							onClick={() => setVariant("cto")}
						>
							Leadership
						</button>
						<button
							type="button"
							className={variant === "ic" ? "is-active" : ""}
							aria-pressed={variant === "ic"}
							onClick={() => setVariant("ic")}
						>
							Engineering
						</button>
					</fieldset>
					<a
						className="cv-pdf-link"
						href={variant === "cto" ? "/cv/cv.pdf" : "/cv/cv-ic.pdf"}
					>
						Download PDF
					</a>
				</div>
			</header>

			<div className="cv-grid">
				<Section id="highlights" title="Highlights" className="cv-col-main">
					<ul className="cv-bullets">
						{data.highlights.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</Section>

				<Section id="skills" title="Skills" className="cv-col-side">
					<ul className="cv-skill-list">
						{data.skills.map((skill) => (
							<li key={skill} className="cv-skill">
								{skill}
							</li>
						))}
					</ul>
				</Section>
			</div>

			<Section id="experience" title="Experience">
				<div className="cv-roles">
					{data.work.map((work) => (
						<WorkItem key={work.company} work={work} />
					))}
				</div>
			</Section>

			<div className="cv-grid">
				<Section id="speaking" title="Speaking" className="cv-col-main">
					<ul className="cv-talks">
						{data.talks.map((talk) => (
							<li key={talk.title} className="cv-talk">
								<a
									href={talk.url}
									target="_blank"
									rel="noreferrer"
									className="cv-talk-title"
								>
									{talk.title}
								</a>
								<span className="cv-talk-venue">{talk.venue}</span>
								<span className="cv-talk-links">
									{talk.links.map((link) => (
										<a
											key={link.url}
											href={link.url}
											target="_blank"
											rel="noreferrer"
										>
											{link.label}
										</a>
									))}
								</span>
							</li>
						))}
					</ul>
				</Section>

				<Section id="education" title="Education" className="cv-col-side">
					<ul className="cv-education">
						{data.education.map((edu) => (
							<li key={edu.studyType}>
								<span className="cv-degree">{edu.studyType}</span>
								<span className="cv-school">
									{edu.institution} · {edu.period}
								</span>
								{edu.notes.map((note) => (
									<span key={note} className="cv-note">
										{note}
									</span>
								))}
							</li>
						))}
					</ul>
				</Section>
			</div>

			<Section id="foss" title="Open Source">
				<div className="cv-projects">
					{data.projects.map((project) => (
						<a
							key={project.name}
							href={project.url}
							target="_blank"
							rel="noreferrer"
							className="cv-project"
						>
							<span className="cv-project-name">{project.name}</span>
							{project.summary.map((line) => (
								<span key={line} className="cv-project-summary">
									{line}
								</span>
							))}
						</a>
					))}
				</div>
			</Section>

			<Section id="interests" title="Interests" className="cv-interests">
				<p>{data.interests}</p>
			</Section>
		</main>
	);
}
