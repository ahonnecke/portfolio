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
import CaseStudiesIndex, {
	CaseStudiesSection,
} from "./caseStudies/CaseStudiesIndex";
import CaseStudyPage from "./caseStudies/CaseStudyPage";
import { ProjectCard } from "./projects/ProjectCard";
import { projects } from "./projects/projects.data";
import "./caseStudies/caseStudies.css";
import CvPage from "./cv/CvPage";
import { Seo } from "./seo/Seo";

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
			<CaseStudiesSection />
			<section className="csSection">
				<h2 className="csSectionHeading">Projects</h2>
				<div className="csGrid">
					{projects.map((p) => (
						<ProjectCard key={p.to} p={p} />
					))}
				</div>
			</section>
		</>
	);
}

export default App;
