import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import myVideo from "../public/fire_table.mov";
import quadLit from "../public/quad_lit.jpg";

import LintingCard from "../public/linting_card.png";
import BigWheelCard from "../public/big_wheel_card.png";
import FireTableCard from "../public/fire_table_card.png";
import ConsoloCard from "../public/consolo_card.png";
import CvCard from "../public/cv_card.png";
import DevopsCard from "../public/devops_card.png";
import DockerCard from "../public/docker_card.png";
import GithubCard from "../public/github_card.png";
import HomeCard from "../public/home_card.jpg";
import JollyBrancherCard from "../public/jolly_brancher_card.png";
import QuadricycleCard from "../public/quadricycle_card.png";
import SnifterCard from "../public/snifter_card.png";

interface NavMap {
  [key: string]: {
    link: string;
    image: string;
    text: string;
    color: string;
    category: string;
    detail: string;
  };
}

const navMap: NavMap = {
  big_wheel: {
    link: "https://drive.google.com/file/d/0B2sPu-smnJTpX2hCc2JLWTNSN3M/view?resourcekey=0-76YjSJXAvs0IlX1lH6tkmw",
    image: BigWheelCard,
    text: "Big Wheel",
    color: "#FDDBA5",
    category: "Art",
    detail: "placeholder_detail",
  },
  fire_table: {
    link: "/fire_table/",
    image: FireTableCard,
    text: "Fire Table",
    color: "#FF4820",
    category: "Art",
    detail: "placeholder_detail",
  },
  cv: {
    link: "https://pixelstub.com/cv/ashton_honnecke_cv.pdf",
    image: CvCard,
    text: "CV PDF",
    color: "#FDF4EB",
    category: "Doc",
    detail: "placeholder_detail",
  },
  quadricycle: {
    link: "/quadricycle/",
    image: QuadricycleCard,
    text: "Quadricycle",
    color: "#5B92A6",
    category: "Art",
    detail: "placeholder_detail",
  },
  cleaning_up: {
    link: "https://www.youtube.com/watch?v=cpseEHA_haA",
    image: DockerCard,
    text: "Containers",
    color: "#5CE6ED",
    category: "Speaking",
    detail: "placeholder_detail",
  },
  linting: {
    link: "linting/",
    image: LintingCard,
    text: "Linting",
    color: "#EDCCB8",
    category: "Speaking",
    detail: Linting,
  },
  consolo: {
    link: "https://pypi.org/project/consolo/",
    image: ConsoloCard,
    text: "Consolo",
    color: "#EA5C48",
    category: "FOSS",
    detail: "placeholder_detail",
  },
  snifter: {
    link: "https://pypi.org/project/snifter/",
    image: SnifterCard,
    text: "Snifter",
    color: "#FEA11C",
    category: "FOSS",
    detail: "placeholder_detail",
  },
  jolly_brancher: {
    link: "https://pypi.org/project/jolly-brancher/",
    image: JollyBrancherCard,
    text: "Jolly Brancher",
    color: "#9DC043",
    category: "FOSS",
    detail: "placeholder_detail",
  },
  github: {
    link: "https://github.com/ahonnecke/",
    image: GithubCard,
    text: "Github",
    color: "#CED1FC",
    category: "Link",
    detail: "placeholder_detail",
  },
  home: {
    link: "/",
    image: HomeCard,
    text: "Home",
    color: "#FDFDFF",
    category: "placeholder_category",
    detail: "placeholder_detail",
  },
  devops: {
    link: "/devops/",
    image: DevopsCard,
    text: "DevOps",
    color: "#E2725C",
    category: "Link",
    detail: "placeholder_detail",
  },
};

function App() {
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

function Main() {
  return (
    <>
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
    </>
  );
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
          <span className="cardDetail" style={{ color: navData.color }}>
            {navData.detail}
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

function Linting() {
  const navData = navMap["linting"];
  return (
    <span>
      <span>The Value of Linting</span>
      <img src={navData.image} alt={navData.text} />
      <p>
        I delivered a local talk on linting, which is now only{" "}
        <a href="https://github.com/ahonnecke/linting">hosted on GitHub</a>
        (the recoding was lost in the fervor of COVID). This talk, which I
        authored and, delved deep into the world of linting, a crucial aspect of
        programming that ensures code quality and readability. Linting, a type
        of static code analysis, checks code for potential errors, bugs,
        stylistic errors, and suspicious constructs. In this talk, I guided the
        audience through the importance of linting, how to set it up, and how to
        use it to improve code quality. The talk was beneficial for both
        seasoned developers and beginners in coding, offering valuable insights
        into the best practices of using linting tools in projects. This
        experience enhanced my coding skills and deepened my understanding of
        linting[1].
      </p>
    </span>
  );
}

export default App;
