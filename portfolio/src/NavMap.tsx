import BigWheelCard from "../public/big_wheel_card.png";
import ConsoloCard from "../public/consolo_card.png";
import ResumeBuildPipelineCard from "../public/cv_build_card.png";
import CvCard from "../public/cv_card.png";
import DevopsCard from "../public/devops_card.jpg";
import DockerCard from "../public/docker_card.png";
import FireTableCard from "../public/fire_table_card.png";
import FoodieFolderCard from "../public/foodie_card.png";
import GithubCard from "../public/github_card.png";
import HagglebotCard from "../public/hagglebot_card.png";
import HomeCard from "../public/home_card.jpg";
import JollyBrancherCard from "../public/jolly_brancher_card.png";
import LintingCard from "../public/linting_card.png";
import QuadricycleCard from "../public/quadricycle_card.png";
import RentinityCard from "../public/rentinity_card.png";
import SnifterCard from "../public/snifter_card.png";
import TonalRecallCard from "../public/tonal_recall_card.png";
import ToyContractorCard from "../public/toy_contractor_card.png"; // Temporarily using wayward_card.png as placeholder
import WaywardCard from "../public/wayward_card.png";
import type { NavMap } from "./NavMapInterface.tsx";
import {
	BigWheelAbstract,
	ConsoloAbstract,
	CvAbstract,
	DevopsAbstract,
	DockerAbstract,
	FireTableAbstract,
	FoodieFolderAbstract,
	GithubAbstract,
	HagglebotAbstract,
	HomeAbstract,
	JollyBrancherAbstract,
	LintingAbstract,
	QuadricycleAbstract,
	RentinityAbstract,
	ResumeBuildPipelineAbstract,
	SnifterAbstract,
	TonalRecallAbstract,
	ToyContractorAbstract,
	WaywardAbstract,
} from "./components/Abstracts";

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
		link: "https://pixelstub.com/cv/cv.pdf",
		image: CvCard,
		text: "Full CV PDF",
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
		link: "https://github.com/ahonnecke/linting",
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
	foodie_folder: {
		link: "https://apps.apple.com/us/app/foodie-folder/id6738889379",
		image: FoodieFolderCard,
		text: "Foodie Folder",
		category: "Mobile",
		detail: FoodieFolderAbstract,
	},
	hagglebot: {
		link: "https://github.com/ahonnecke/hagglebot",
		image: HagglebotCard,
		text: "Hagglebot",
		category: "AI",
		detail: HagglebotAbstract,
	},
	rentinity: {
		link: "https://github.com/ahonnecke/rentinity/",
		image: RentinityCard,
		text: "Rentinity",
		category: "Blockchain",
		detail: RentinityAbstract,
	},
	tonal_recall: {
		link: "https://github.com/ahonnecke/TonalRecall",
		image: TonalRecallCard,
		text: "Tonal Recall",
		category: "Game",
		detail: TonalRecallAbstract,
	},
	toy_contractor: {
		link: "https://github.com/ahonnecke/toy_contractor",
		image: ToyContractorCard,
		text: "Toy Contractor",
		category: "AI",
		detail: ToyContractorAbstract,
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
	resume_build_pipeline: {
		link: "/resume_build_pipeline/",
		image: ResumeBuildPipelineCard,
		text: "Resume Build Pipeline",
		category: "DevOps",
		detail: ResumeBuildPipelineAbstract,
	},
};
