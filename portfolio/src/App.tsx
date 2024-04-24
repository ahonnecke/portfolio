import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import myVideo from "../public/fire_table.mov";
import quadLit from "../public/quad_lit.jpg";

interface NavMap {
  [key: string]: {
    link: string;
    image: string;
    text: string;
    color: string;
    category: string;
    detail_component: string;
  };
}

const navMap: NavMap = {
  big_wheel: {
    link: "https://drive.google.com/file/d/0B2sPu-smnJTpX2hCc2JLWTNSN3M/view?resourcekey=0-76YjSJXAvs0IlX1lH6tkmw",
    image: "big_wheel_card.png",
    text: "Big Wheel",
    color: "#FDDBA5",
    category: "Art",
    detail_component: "placeholder_detail_component",
  },
  fire_table: {
    link: "/fire_table/",
    image: "fire_table.png",
    text: "Fire Table",
    color: "#FF4820",
    category: "Art",
    detail_component: "placeholder_detail_component",
  },
  cv: {
    link: "https://pixelstub.com/cv/ashton_honnecke_cv.pdf",
    image: "cv_card.png",
    text: "CV PDF",
    color: "#FDF4EB",
    category: "Doc",
    detail_component: "placeholder_detail_component",
  },
  quadricycle: {
    link: "/quadricycle/",
    image: "quadricycle_card.png",
    text: "Quadricycle",
    color: "#5B92A6",
    category: "Art",
    detail_component: "placeholder_detail_component",
  },
  cleaning_up: {
    link: "https://www.youtube.com/watch?v=cpseEHA_haA",
    image: "docker_card.png",
    text: "Containers",
    color: "#5CE6ED",
    category: "Speaking",
    detail_component: "placeholder_detail_component",
  },
  linting: {
    link: "https://github.com/ahonnecke/linting-talk",
    image: "linting_card.png",
    text: "Linting",
    color: "#EDCCB8",
    category: "Speaking",
    detail_component: "placeholder_detail_component",
  },
  consolo: {
    link: "https://pypi.org/project/consolo/",
    image: "consolo_card.png",
    text: "Consolo",
    color: "#EA5C48",
    category: "FOSS",
    detail_component: "placeholder_detail_component",
  },
  snifter: {
    link: "https://pypi.org/project/snifter/",
    image: "snifter_card.png",
    text: "Snifter",
    color: "#FEA11C",
    category: "FOSS",
    detail_component: "placeholder_detail_component",
  },
  jolly_brancher: {
    link: "https://pypi.org/project/jolly-brancher/",
    image: "jolly_brancher_card.png",
    text: "Jolly Brancher",
    color: "#9DC043",
    category: "FOSS",
    detail_component: "placeholder_detail_component",
  },
  github: {
    link: "https://github.com/ahonnecke/",
    image: "github_card.png",
    text: "Github",
    color: "#CED1FC",
    category: "Link",
    detail_component: "placeholder_detail_component",
  },
  home: {
    link: "/",
    image: "home_card.jpg",
    text: "Home",
    color: "#FDFDFF",
    category: "placeholder_category",
    detail_component: "placeholder_detail_component",
  },
  devops: {
    link: "/devops/",
    image: "devops_card.jpg",
    text: "DevOps",
    color: "#E2725C",
    category: "Link",
    detail_component: "placeholder_detail_component",
  },
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
  const navData = navMap[tile];
  return (
    <a href={navData.link}>
      <span className="card">
        <img src={navData.image} alt={navData.text} />
        <span className="bubbles">
          <span className="cardCategory" style={{ color: navData.color }}>
            {navData.category}
          </span>
          <span className="cardTitle" style={{ color: navData.color }}>
            {navData.text}
          </span>
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
