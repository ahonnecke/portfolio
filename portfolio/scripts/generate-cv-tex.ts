// Generate a print-ready LaTeX CV from the single source of truth
// (src/cv/resume.data.ts) via the same selectVariant() the web page uses, so
// the web /cv page and the PDF can never drift.
//
//   node scripts/generate-cv-tex.ts <cto|ic> > build/cv-<variant>.tex
//
// The emitted .tex is self-contained (no resume.sty, no Emacs/Org) and compiles
// with xelatex. Styling lives entirely in PREAMBLE below — keep it in sync with
// the look you want; the body is pure data.

import { resume } from "../src/cv/resume.data";
import type { ResolvedResume, Variant } from "../src/cv/resume.types";
import { selectVariant } from "../src/cv/variant";

// --- LaTeX escaping -------------------------------------------------------
// Escapes the LaTeX specials in plain prose. Unicode (– — • → ↔ ' …) is left
// literal; the preamble + DejaVu Sans (xelatex/HarfBuzz) render it directly.
const SPECIALS: Record<string, string> = {
	"\\": "\\textbackslash{}",
	"&": "\\&",
	"%": "\\%",
	$: "\\$",
	"#": "\\#",
	_: "\\_",
	"{": "\\{",
	"}": "\\}",
	"~": "\\textasciitilde{}",
	"^": "\\textasciicircum{}",
};
const tex = (s: string): string => s.replace(/[\\&%$#_{}~^]/g, (c) => SPECIALS[c]);

// URLs get the same escaping (matches the previous Org output, e.g. \_ in a
// query string); \url / \href tolerate the escaped forms.
const url = (s: string): string => tex(s);

const item = (s: string): string => `\\item ${tex(s)}`;
const itemize = (lines: string[]): string =>
	["\\begin{itemize}", ...lines.map(item), "\\end{itemize}"].join("\n");

// --- Preamble (the entire "pretty" — no external .sty) --------------------
function preamble(r: ResolvedResume): string {
	const c = r.contact;
	const contactBits = [
		`\\href{mailto:${url(c.email)}}{${tex(c.email)}}`,
		c.website ? `\\url{${url(c.website)}}` : null,
		c.linkedin ? `\\url{${url(c.linkedin)}}` : null,
		c.github ? `\\url{${url(c.github)}}` : null,
		c.location ? tex(c.location) : null,
	].filter(Boolean);
	return String.raw`\documentclass[11pt]{scrartcl}

%% Fonts
\usepackage{fontspec}
\defaultfontfeatures{Ligatures=TeX,Scale=MatchLowercase,Renderer=HarfBuzz}
\setmainfont{DejaVu Sans}
\setsansfont{DejaVu Sans}
\setmonofont{DejaVu Sans Mono}

%% Unicode fallbacks
\usepackage{newunicodechar}
\newunicodechar{•}{\textbullet}
\newunicodechar{–}{--}
\newunicodechar{—}{---}
\newunicodechar{…}{\ldots}

%% Page & spacing
\usepackage[letterpaper,margin=1in]{geometry}
\usepackage{microtype}
\usepackage{parskip}
\setlength{\parskip}{4pt}
\setlength{\parindent}{0pt}
\raggedright

%% Lists (compact)
\usepackage{enumitem}
\setlist[itemize]{topsep=2pt,itemsep=2pt,parsep=0pt}

%% Underline for the SME line
\usepackage[normalem]{ulem}

%% Colors & links
\usepackage{xcolor}
\definecolor{Accent}{HTML}{0F766E}
\definecolor{TextGray}{HTML}{333333}
\color{TextGray}
\usepackage[hidelinks]{hyperref}
\hypersetup{colorlinks=true,linkcolor=Accent,urlcolor=Accent,citecolor=Accent}

%% Headings
\usepackage{titlesec}
\titleformat{\section}{\Large\scshape\color{Accent}}{}{0pt}{}
\titlespacing*{\section}{0pt}{8pt}{4pt}
\titleformat{\subsection}{\normalsize\bfseries}{}{0pt}{}
\titlespacing*{\subsection}{0pt}{6pt}{2pt}

%% Header block
\newcommand{\cvname}{${tex(c.name)}}
\newcommand{\cvtagline}{${tex(r.tagline)}}
\newcommand{\cvcontact}{${contactBits.join(" \\textbullet\\ ")}}
\makeatletter
\renewcommand{\maketitle}{%
  {\centering
    {\Huge\bfseries\cvname\par}
    \vspace{2pt}
    {\normalsize\color{Accent}\cvtagline\par}
    \vspace{3pt}
    {\footnotesize\cvcontact\par}
    \vspace{8pt}\hrule\vspace{8pt}
  }}
\makeatother

\title{${tex(c.name)} — Curriculum Vitae}
\author{${tex(c.name)}}
\hypersetup{pdfauthor={${tex(c.name)}},pdftitle={${tex(c.name)} — Curriculum Vitae},pdflang={English}}

\begin{document}
\maketitle
\vspace{-0.4em}`;
}

// --- Body sections --------------------------------------------------------
const section = (title: string): string => `\\section*{\\color{Accent}${tex(title)}}`;
const subsection = (title: string): string => `\\subsection*{${tex(title)}}`;

function experience(r: ResolvedResume): string {
	const blocks = r.work.map((w) => {
		const head = subsection(`${w.company} – ${w.position} (${w.period})`);
		const sme = `\\uline{Subject Matter Expert:} ${tex(w.expertise)}`;
		return [head, sme, itemize(w.highlights)].join("\n");
	});
	return [section("Experience"), ...blocks].join("\n");
}

function speaking(r: ResolvedResume): string {
	const items = r.talks.map((t) => {
		const head = `\\item \\href{${url(t.url)}}{${tex(t.title)}}`;
		const links = (t.links ?? []).map(
			(l) => `\\item ${tex(l.label)}: \\url{${url(l.url)}}`,
		);
		return links.length
			? [head, "\\begin{itemize}", ...links, "\\end{itemize}"].join("\n")
			: head;
	});
	return [section("Speaking"), "\\begin{itemize}", ...items, "\\end{itemize}"].join(
		"\n",
	);
}

function projects(r: ResolvedResume): string {
	const blocks = r.projects.map((p) =>
		[
			subsection(p.name),
			itemize([...p.summary, ...(p.url ? [p.url] : [])]),
		].join("\n"),
	);
	return [section("FOSS Utilities"), ...blocks].join("\n");
}

function education(r: ResolvedResume): string {
	const blocks = r.education.map((e) =>
		[
			subsection(`${e.studyType} — ${e.institution} (${e.period})`),
			itemize(e.notes ?? []),
		].join("\n"),
	);
	return [section("Education"), ...blocks].join("\n");
}

function render(variant: Variant): string {
	const r = selectVariant(resume, variant);
	return [
		preamble(r),
		section("Highlights"),
		itemize(r.highlights),
		experience(r),
		section("Skills"),
		itemize(r.skills),
		speaking(r),
		projects(r),
		education(r),
		"\\end{document}",
		"",
	].join("\n\n");
}

const variant = (process.argv[2] ?? "cto") as Variant;
if (variant !== "cto" && variant !== "ic") {
	console.error(`usage: generate-cv-tex.ts <cto|ic> (got: ${variant})`);
	process.exit(1);
}
process.stdout.write(render(variant));
