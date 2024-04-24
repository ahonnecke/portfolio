import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import myVideo from "../public/fire_table.mov";
import quadLit from "../public/quad_lit.jpg";

interface LinkMap {
  [key: string]: string;
}

const linkMap: LinkMap = {
  cv: "https://pixelstub.com/cv/ashton_honnecke_cv.pdf",
  home: "/",
  cleaning_up: "https://www.youtube.com/watch?v=cpseEHA_haA",
  github: "https://github.com/ahonnecke/",
  consolo: "https://pypi.org/project/consolo/",
  snifter: "https://pypi.org/project/snifter/",
  jolly_brancher: "https://pypi.org/project/jolly-brancher/",
  linting: "https://github.com/ahonnecke/linting-talk",
  big_wheel:
    "https://drive.google.com/file/d/0B2sPu-smnJTpX2hCc2JLWTNSN3M/view?resourcekey=0-76YjSJXAvs0IlX1lH6tkmw",
  fire_table: "/fire_table/",
  quadricycle: "/quadricycle/",
};

const imageMap = {
  big_wheel: "big_wheel_card.png",
  fire_table: "fire_table.png",
  cv: "cv_card.png",
  quadricycle: "quadricycle_card.png",
  cleaning_up: "docker_card.png",
  linting: "linting_card.png",
  consolo: "consolo_card.png",
  snifter: "snifter_card.png",
  jolly_brancher: "jolly_brancher_card.png",
  github: "github_card.png",
  home: "home_card.jpg",
  devops: "devops_card.jpg",
};

const textMap = {
  big_wheel: "Big Wheel",
  fire_table: "Fire Table",
  cv: "CV PDF",
  quadricycle: "Quadricycle",
  cleaning_up: "Containers",
  linting: "Linting",
  consolo: "Consolo",
  snifter: "Snifter",
  jolly_brancher: "Jolly Brancher",
  github: "Github",
  home: "Home",
  devops: "DevOps",
};

const textColorMap = {
  big_wheel: "#FDDBA5",
  fire_table: "#FF4820",
  cv: "#FDF4EB",
  quadricycle: "#5B92A6",
  cleaning_up: "#5CE6ED",
  linting: "#EDCCB8",
  consolo: "#EA5C48",
  snifter: "#FEA11C",
  jolly_brancher: "#9DC043",
  github: "#CED1FC",
  home: "#FDFDFF",
  devops: "#E2725C",
};

function App() {
  return (
    <Router>
      <div>
        <h1 className="fullname">
          Ashton Honnecke
          <a
            className="quickPdf"
            href="https://pixelstub.com/cv/ashton_honnecke_cv.pdf"
          >
            PDF
          </a>
        </h1>
        <h3 className="tagline">DevOps / Backend / Frontend</h3>
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

function Main() {
  return <div></div>;
}

function Tile({ tile }: { tile: string }) {
  const titleColor = textColorMap[tile as keyof typeof textColorMap];
  const tileLink = linkMap[tile];
  const tileImage = imageMap[tile as keyof typeof imageMap]; // Add index signature to imageMap
  const tileText = textMap[tile as keyof typeof textMap]; // Add index signature to textMap
  return (
    <a href={tileLink}>
      <span className="card">
        <img src={tileImage} alt={tileText} />
        <span className="cardTitle" style={{ color: titleColor }}>
          {tileText}
        </span>
      </span>
    </a>
  );
}

function BigWheel() {
  return (
    <span>
      <span>Big Wheel Project</span>
      <p>Details about my big wheel project...</p>
    </span>
  );
}

function FireTable() {
  return (
    <span>
      <span>Fire Table Project</span>
      <video controls autoPlay loop muted>
        <source src={myVideo} type="video/mp4"></source>
      </video>
    </span>
  );
}

function CV() {
  return (
    <span>
      <span>My CV</span>
      <p>CV details...</p>
    </span>
  );
}

function Quadricycle() {
  return (
    <span>
      <span>Quadricycle Project</span>
      <img src={quadLit} alt="Quadricycle" />
    </span>
  );
}

function CleaningUp() {
  return (
    <span>
      <span>Cleaning Up Your Python Environment</span>
      <p>Details about cleaning up Python environments...</p>
    </span>
  );
}

function Linting() {
  return (
    <span>
      <span>The Value of Linting</span>
      <p>Details on the value of linting...</p>
    </span>
  );
}

function Consolo() {
  return (
    <span>
      <span>Consolo Project</span>
      <p>Details about the Consolo project...</p>
    </span>
  );
}

function Snifter() {
  return (
    <span>
      <span>Snifter Project</span>
      <p>Details about the Snifter project...</p>
    </span>
  );
}

function JollyBrancher() {
  return (
    <span>
      <span>Jolly Brancher Project</span>
      <p>Details about the Jolly Brancher project...</p>
    </span>
  );
}

function Github() {
  return (
    <span>
      <span>Github</span>
      <p>My social media links...</p>
    </span>
  );
}

export default App;
