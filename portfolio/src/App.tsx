import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";
import * as React from "react"; // Import React to fix TypeScript error
import {
  BigWheel,
  FireTable,
  CV,
  Quadricycle,
  CleaningUp,
  Consolo,
  Snifter,
  JollyBrancher,
  Github,
  Linting,
} from "./Details.tsx";
import { navMap } from "./NavMap.tsx";

function App(): JSX.Element {
  // Add explicit return type for function App
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/big_wheel" element={<BigWheel />} />
        <Route path="/fire_table" element={<FireTable />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/quadricycle" element={<Quadricycle />} />
        <Route path="/cleaning_up" element={<CleaningUp />} />
        <Route path="/linting" element={<Linting />} />
        <Route path="/consolo" element={<Consolo />} />
        <Route path="/snifter" element={<Snifter />} />
        <Route path="/jolly_brancher" element={<JollyBrancher />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </Router>
  );
}

function Main(): JSX.Element {
  // Add explicit return type for function Main
  return (
    <>
      <div>
        <h1 className="fullname">
          Ashton Honnecke
          <Link
            className="quickPdf"
            to="https://pixelstub.com/cv/ashton_honnecke_cv.pdf" // Change to Link with 'to' attribute
          >
            PDF
          </Link>
        </h1>
        <h3 className="tagline">Linux / Python / Cloud / DevOps</h3>
      </div>

      <div className="tiles">
        <Tile tile="github" />
        <Tile tile="cleaning_up" />
        <Tile tile="linting" />
        <Tile tile="devops" />
        <Tile tile="consolo" />
        <Tile tile="snifter" />
        <Tile tile="jolly_brancher" />
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
