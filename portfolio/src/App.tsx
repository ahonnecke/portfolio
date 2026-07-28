import { Route, Routes, useLocation } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";
import {
	BigWheel,
	Consolo,
	Denv,
	Devops,
	Docker,
	FireTable,
	FoodieFolder,
	Github,
	Hagglebot,
	JollyBrancher,
	Linting,
	Quadricycle,
	Rentinity,
	ResumeBuildPipeline,
	SafeStreets,
	Shush,
	Snifter,
	TonalRecall,
	ToyContractor,
	Wayward,
} from "./Details";
import CaseStudiesIndex from "./caseStudies/CaseStudiesIndex";
import CaseStudyPage from "./caseStudies/CaseStudyPage";
import "./caseStudies/caseStudies.css";
import CvPage from "./cv/CvPage";
import JdLanding from "./jd/JdLanding";
import { Seo } from "./seo/Seo";
import { WorkGrid } from "./work/WorkGrid";

function App(): JSX.Element {
	// Add explicit return type for function App
	return (
		<>
			<Router>
				<Seo />
				<SiteHeader />

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/case-studies" element={<CaseStudiesIndex />} />
					<Route path="/case-studies/:slug" element={<CaseStudyPage />} />
					<Route path="/for/:slug" element={<JdLanding />} />
					<Route path="/big_wheel" element={<BigWheel />} />
					<Route path="/docker" element={<Docker />} />
					<Route path="/consolo" element={<Consolo />} />
					<Route path="/cv" element={<CvPage />} />
					<Route path="/fire_table" element={<FireTable />} />
					<Route path="/github" element={<Github />} />
					<Route path="/jolly_brancher" element={<JollyBrancher />} />
					<Route path="/wayward" element={<Wayward />} />
					<Route path="/foodie_folder" element={<FoodieFolder />} />
					<Route path="/hagglebot" element={<Hagglebot />} />
					<Route path="/rentinity" element={<Rentinity />} />
					<Route path="/tonal_recall" element={<TonalRecall />} />
					<Route path="/toy_contractor" element={<ToyContractor />} />
					<Route path="/linting" element={<Linting />} />
					<Route path="/quadricycle" element={<Quadricycle />} />
					<Route path="/snifter" element={<Snifter />} />
					<Route path="/devops" element={<Devops />} />
					<Route path="/safe_streets" element={<SafeStreets />} />
					<Route path="/shush" element={<Shush />} />
					<Route path="/denv" element={<Denv />} />
					<Route
						path="/resume_build_pipeline"
						element={<ResumeBuildPipeline />}
					/>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

function SiteHeader(): JSX.Element | null {
	// The /cv page renders its own identity header; suppress the site chrome
	// there so the name/tagline aren't duplicated (on screen and in the PDF).
	const { pathname } = useLocation();
	if (pathname === "/cv") {
		return null;
	}
	return (
		<div>
			<h1 id="fullname">
				<Link to="/">Ashton Honnecke</Link>
				<a className="quickPdf" href="/cv/cv.pdf">
					CV
				</a>
			</h1>
			<h3 className="tagline">Linux / Python / Cloud / DevOps</h3>
		</div>
	);
}

function Main(): JSX.Element {
	// Add explicit return type for function Main
	return (
		<>
			<p className="siteIntro">
				Engineering leader with ~25 years building production systems — most
				recently CTO at CrewCapable, taking an AI-native platform from proof of
				concept to production as the sole engineer. I lead hands-on: I set the
				standards and still ship the code. Open to Staff, Principal, and
				Technical Lead roles, fully remote.
			</p>
			<WorkGrid />
		</>
	);
}

function Footer(): JSX.Element | null {
	const { pathname } = useLocation();
	if (pathname === "/cv") {
		return null;
	}
	return (
		<footer className="siteFooter">
			<span className="siteFooterName">Ashton Honnecke</span>
			<nav className="siteFooterLinks">
				<a href="mailto:published_cv@cxcs.us">Email</a>
				<a
					href="https://www.linkedin.com/in/ashtonhonnecke/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
				<a
					href="https://github.com/ahonnecke/"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</nav>
		</footer>
	);
}

export default App;
