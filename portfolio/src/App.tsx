import { Route, Routes } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";
import type * as React from "react"; // Import React to fix TypeScript error
import {
	BigWheel,
	CV,
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
	Snifter,
	Wayward,
} from "./Details.tsx";
import { navMap } from "./NavMap.tsx";

function App(): JSX.Element {
	// Add explicit return type for function App
	return (
		<>
			<Router>
				<div>
					<h1 id="fullname">
						<Link to="/">Ashton Honnecke</Link>
						<Link
							className="quickPdf"
							to="https://pixelstub.com/cv/ashton_honnecke_cv_short.pdf"
						>
							PDF
						</Link>
					</h1>
					<h3 className="tagline">Linux / Python / Cloud / DevOps</h3>
				</div>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/big_wheel" element={<BigWheel />} />
					<Route path="/docker" element={<Docker />} />
					<Route path="/consolo" element={<Consolo />} />
					<Route path="/cv" element={<CV />} />
					<Route path="/fire_table" element={<FireTable />} />
					<Route path="/github" element={<Github />} />
					<Route path="/jolly_brancher" element={<JollyBrancher />} />
					<Route path="/wayward" element={<Wayward />} />
					<Route path="/foodie_folder" element={<FoodieFolder />} />
					<Route path="/hagglebot" element={<Hagglebot />} />
					<Route path="/rentinity" element={<Rentinity />} />
					<Route path="/linting" element={<Linting />} />
					<Route path="/quadricycle" element={<Quadricycle />} />
					<Route path="/snifter" element={<Snifter />} />
					<Route path="/devops" element={<Devops />} />
				</Routes>
			</Router>
		</>
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
	console.log(tile);
	const AbstractComponent = navData.detail as React.ElementType;
	return (
		<Link to={tile}>
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
		</Link>
	);
}

export default App;
