import { Route, Routes, useLocation } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";
import type * as React from "react"; // Import React to fix TypeScript error
import {
	BigWheel,
	Consolo,
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
	Snifter,
	TonalRecall,
	ToyContractor,
	Wayward,
} from "./Details";
import { navMap } from "./NavMap";
import CvPage from "./cv/CvPage";

function App(): JSX.Element {
	// Add explicit return type for function App
	return (
		<>
			<Router>
				<SiteHeader />

				<Routes>
					<Route path="/" element={<Main />} />
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
			<div className="tiles">
				<Tile tile="github" />
				<Tile tile="consolo" />
				<Tile tile="snifter" />
				<Tile tile="jolly_brancher" />
				<Tile tile="wayward" />
				<Tile tile="foodie_folder" />
				<Tile tile="hagglebot" />
				<Tile tile="rentinity" />
				<Tile tile="tonal_recall" />
				<Tile tile="toy_contractor" />
				<Tile tile="docker" />
				<Tile tile="linting" />
				<Tile tile="devops" />
				<Tile tile="big_wheel" />
				<Tile tile="fire_table" />
				<Tile tile="quadricycle" />
				<Tile tile="cv" />
			</div>
		</>
	);
}

function toCamelCase(str: string): string {
	// Add type annotations to 'str'
	return str
		.replace(/\s+/g, " ") // Replace multiple spaces with a single space
		.trim() // Remove leading and trailing spaces
		.split(" ") // Split the string into words
		.map((word, index) => {
			// Convert the first word to lowercase and the rest to Title Case (to create camelCase)
			return index === 0
				? word.toLowerCase()
				: word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(""); // Join the words without spaces
}

function Tile({ tile }: { tile: string }): JSX.Element {
	// Add explicit return type for function Tile
	const navData = navMap[tile]; // Fixed to reference navMap
	const AbstractComponent = navData.detail as React.ElementType;
	const card = (
		<span
			className={`card ${toCamelCase(navData.text)}`}
			style={{ backgroundImage: `url(${navData.image})` }}
		>
			<span className="cardCategory">{navData.category}</span>
			<span className="cardTitle">{navData.text}</span>
			{AbstractComponent && (
				<span className="cardAbstract">
					<AbstractComponent />
				</span>
			)}
		</span>
	);
	// Static documents (e.g. the CV PDF) are served as files, not SPA routes,
	// so a react-router <Link> would never reach them — use a plain anchor.
	if (navData.link.endsWith(".pdf")) {
		return <a href={navData.link}>{card}</a>;
	}
	return <Link to={tile}>{card}</Link>;
}

export default App;
