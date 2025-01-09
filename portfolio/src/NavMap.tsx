import BigWheelCard from "../public/big_wheel_card.png";
import ConsoloCard from "../public/consolo_card.png";
import CvCard from "../public/cv_card.png";
import DevopsCard from "../public/devops_card.jpg";
import DockerCard from "../public/docker_card.png";
import FireTableCard from "../public/fire_table_card.png";
import GithubCard from "../public/github_card.png";
import HomeCard from "../public/home_card.jpg";
import JollyBrancherCard from "../public/jolly_brancher_card.png";
import LintingCard from "../public/linting_card.png";
import QuadricycleCard from "../public/quadricycle_card.png";
import SnifterCard from "../public/snifter_card.png";
import WaywardCard from "../public/wayward_card.png";
import type { NavMap } from "./NavMapInterface.tsx";

const BigWheelAbstract: () => JSX.Element = () => {
  return (
    <span>
      3 Arduinos, hundreds of individually addressable RGB LEDs on an 8 foot
      tall tricycle, Building and taking a mutant vehicle to Burning Man in 2015
      was an unforgettable experience.
    </span>
  );
};

const ConsoloAbstract: () => JSX.Element = () => {
  return (
    <span>
      Consolo is a Free and Open Source Software (FOSS) utility that provides a
      solution for pseudo-mounting an AWS lambda filesystem locally.
    </span>
  );
};

const FireTableAbstract = () => {
  return (
    <span>
      A video of the Fire Table, a propane fire pit table that I built.
    </span>
  );
};

const CvAbstract = () => {
  return <span>My CV</span>;
};

const QuadricycleAbstract = () => {
  return <span>A quadricycle that I built.</span>;
};

const DockerAbstract = () => {
  return (
    <span>
      I was a speaker at PyColorado presnting "Cleaning up your Python
      environment: Does your Python environment look like a superfund site?""
    </span>
  );
};

const LintingAbstract = () => {
  return <span>A talk on the value of linting.</span>;
};

const SnifterAbstract = () => {
  return (
    <span>
      Snifter is a Free and Open Source Software (FOSS) utility that provides a
      solution for inspecting AWS Simple Notification Service (SNS) topic data.
    </span>
  );
};

const JollyBrancherAbstract = () => {
  return (
    <span>
      Jolly-Brancher is a Free and Open Source Software (FOSS) utility designed
      to streamline the developer's workflow by connecting an arbitrary
      ticketing system to a git forge.
    </span>
  );
};

const GithubAbstract = () => {
  return (
    <span>
      My GitHub profile serves as a dynamic resume, showcasing my coding
      projects and contributions to the open-source community. It provides a
      real-time demonstration of my coding skills, problem-solving abilities,
      and collaboration in team projects.
    </span>
  );
};

const HomeAbstract = () => {
  return (
    <span>
      My portfolio website serves as a central hub for my professional
      information, projects, and contact details. It provides a comprehensive
      overview of my skills, experience, and accomplishments, making it easy for
      potential employers or collaborators to learn more about them.
    </span>
  );
};

const DevopsAbstract = () => {
  return (
    <span>
      Passionate DevOps professional with expertise in CI/CD, automation,
      containerization, and linting. I specialize in streamlining software
      delivery pipelines, creating efficient workflows, and ensuring clean,
      maintainable code. My focus is on leveraging containers for scalability,
      automating repetitive tasks for consistency, and advocating for robust
      linting practices to maintain high-quality codebases
    </span>
  );
};

const WaywardAbstract = () => {
  return (
    <span>
      Wayward is a daemon that monitors a folder in the background for new
      files, and applies post processing and then moves the files to a new
      location.
    </span>
  );
};

export const navMap: NavMap = {
  big_wheel: {
    link: "https://drive.google.com/file/d/0B2sPu-smnJTpX2hCc2JLWTNSN3M/view?resourcekey=0-76YjSJXAvs0IlX1lH6tkmw",
    image: BigWheelCard,
    text: "Big Wheel",
    category: "Art",
    detail: BigWheelAbstract,
  },
  fire_table: {
    link: "/fire_table/",
    image: FireTableCard,
    text: "Fire Table",
    category: "Art",
    detail: FireTableAbstract,
  },
  cv: {
    link: "https://pixelstub.com/cv/ashton_honnecke_cv.pdf",
    image: CvCard,
    text: "CV PDF",
    category: "Doc",
    detail: CvAbstract,
  },
  quadricycle: {
    link: "/quadricycle/",
    image: QuadricycleCard,
    text: "Quadricycle",
    category: "Art",
    detail: QuadricycleAbstract,
  },
  docker: {
    link: "https://www.youtube.com/watch?v=cpseEHA_haA",
    image: DockerCard,
    text: "Containers",
    category: "Speaking",
    detail: DockerAbstract,
  },
  linting: {
    link: "linting/",
    image: LintingCard,
    text: "Linting",
    category: "Speaking",
    detail: LintingAbstract,
  },
  consolo: {
    link: "https://pypi.org/project/consolo/",
    image: ConsoloCard,
    text: "Consolo",
    category: "FOSS",
    detail: ConsoloAbstract,
  },
  wayward: {
    link: "wayward/",
    image: WaywardCard,
    text: "wayward",
    category: "Tools",
    detail: WaywardAbstract,
  },
  snifter: {
    link: "https://pypi.org/project/snifter/",
    image: SnifterCard,
    text: "Snifter",
    category: "FOSS",
    detail: SnifterAbstract,
  },
  jolly_brancher: {
    link: "https://pypi.org/project/jolly-brancher/",
    image: JollyBrancherCard,
    text: "Jolly Brancher",
    category: "FOSS",
    detail: JollyBrancherAbstract,
  },
  github: {
    link: "https://github.com/ahonnecke/",
    image: GithubCard,
    text: "Github",
    category: "Link",
    detail: GithubAbstract,
  },
  home: {
    link: "/",
    image: HomeCard,
    text: "Home",
    category: "Link",
    detail: HomeAbstract,
  },
  devops: {
    link: "/devops/",
    image: DevopsCard,
    text: "DevOps",
    category: "CI/CD",
    detail: DevopsAbstract,
  },
};
