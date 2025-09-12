import BigWheelCard from "../public/big_wheel_card.png";
import ConsoloCard from "../public/consolo_card.png";
import CvCard from "../public/cv_card.png";
import DevopsCard from "../public/devops_card.jpg";
import DockerCard from "../public/docker_card.png";
import FireTableCard from "../public/fire_table_card.png";
import GithubCard from "../public/github_card.png";
import HagglebotCard from "../public/hagglebot_card.png";
import HomeCard from "../public/home_card.jpg";
import JollyBrancherCard from "../public/jolly_brancher_card.png";
import LintingCard from "../public/linting_card.png";
import QuadricycleCard from "../public/quadricycle_card.png";
import SnifterCard from "../public/snifter_card.png";
import FoodieFolderCard from "../public/wayward_card.png";
import WaywardCard from "../public/wayward_card.png";

const BigWheelAbstract: () => JSX.Element = () => {
	return (
		<span>
			In 2015, I built and brought a mutant vehicle to Burning Man—an
			8-foot-tall tricycle lit up with hundreds of individually addressable RGB
			LEDs, all controlled by three Arduinos. It was a wild engineering
			challenge and an unforgettable experience that blended creativity,
			hardware hacking, and a lot of late-night debugging in preperation for the
			desert.
		</span>
	);
};

const ConsoloAbstract: () => JSX.Element = () => {
	return (
		<span>
			I built Consolo, a free and open source utility that lets me pseudo-mount
			an AWS Lambda filesystem locally—basically giving me a way to interact
			with a Lambda’s codebase as if it were right on my machine. It supports
			hot reloading by default, so I can make changes and sync them on the fly.
			Whether I’m pushing updates to the cloud, pulling the latest from a
			function, or just exploring a better local dev workflow for serverless,
			Consolo makes Lambda development a lot less painful.{" "}
		</span>
	);
};

const FireTableAbstract = () => {
	return (
		<span>
			This is a video of the Fire Table, a propane fire pit table I built and
			took to Burning Man as part of an installation. It’s like a zen
			garden—only the patterns you rake into the sand catch fire. Propane, being
			heavier than air, pools in the grooves people create. When ignited, the
			flame follows those low points, creating living patterns of fire that
			shift and dance across the surface based on how the sand is shaped.
			There’s no automation or sensors—just physics, flame, and human
			interaction. It invites quiet play and chaotic beauty at the same time.{" "}
		</span>
	);
};

const CvAbstract = () => {
	return <span>My CV</span>;
};

const QuadricycleAbstract = () => {
	return (
		<span>
			I built this quadricycle by combining two bikes in parallel with a custom
			steering linkage for smooth control. It’s built for the deep playa—stable
			enough that it doesn’t even need a kickstand in the sand. I added a canopy
			overhead and outfitted it with hundreds of individually addressable LEDs
			running a smooth, rainbow fade pattern. The result was a functional,
			eye-catching ride that doubled as a rolling art piece at Burning Man.{" "}
		</span>
	);
};

const DockerAbstract = () => {
	return (
		<span>
			I spoke at PyColorado, presenting a talk titled "Cleaning Up Your Python
			Environment: Does Your Python Environment Look Like a Superfund Site?" In
			it, I walked through practical ways to get unruly dev environments under
			control—starting with containerization for clean, repeatable setups. I
			also dug into how to use Docker Compose to manage multi-service
			environments, with a focus on integrating databases into local workflows.
			It was a fun, technical talk aimed at helping developers reduce friction
			and gain confidence in their tooling.{" "}
		</span>
	);
};

const LintingAbstract = () => {
	return (
		<span>
			I gave a talk at PyDEN, the Denver Python meetup, on the value of linting
			in everyday development. I focused on how good linting practices reduce
			cognitive load—making code easier to read, review, and maintain. I also
			covered the tooling available in the Python ecosystem at the time,
			highlighting Black as a great starting point for enforcing consistency
			with minimal effort. The goal was to show how a well-linted codebase isn’t
			just prettier—it’s more collaborative and less mentally taxing.{" "}
		</span>
	);
};

const SnifterAbstract = () => {
	return (
		<span>
			I built Snifter, a free and open source utility for inspecting data
			flowing through AWS SNS topics—something that’s normally tough to do since
			SNS messages are ephemeral. You could subscribe via email or SMS, but
			that’s clunky. Snifter takes a cleaner approach: it creates a temporary
			SQS queue, subscribes it to the SNS topic you specify, and starts
			listening—all with a single command. It even drops into an interactive
			debug session so you can explore the message payloads in detail. When
			you’re done, just hit Ctrl+C and the queue is automatically torn down.
			It’s a lightweight, disposable way to peek inside your pub/sub data
			without leaving a mess behind.{" "}
		</span>
	);
};

const JollyBrancherAbstract = () => {
	return (
		<span>
			I created Jolly-Brancher, a free and open source utility that smooths out
			the friction between ticketing systems and git forges. It’s designed to
			reduce the overhead of jumping between tools—especially in workflows tied
			to JIRA. Under the hood, it’s a command-line tool with solid plumbing, and
			I’ve built Emacs integration on top for a more polished developer
			experience. With Jolly-Brancher, I can generate branches, track work, and
			keep tickets updated without leaving my editor or context.{" "}
		</span>
	);
};

const GithubAbstract = () => {
	return (
		<span>
			My GitHub profile is more than just a collection of code—it's a living
			portfolio that reflects how I think, build, and collaborate. It highlights
			the projects I’ve worked on, my contributions to open-source, and the way
			I tackle real-world problems through code. Whether I’m building something
			from scratch or contributing to a team effort, my GitHub shows how I
			approach challenges and grow as a developer.{" "}
		</span>
	);
};

const HomeAbstract = () => {
	return (
		<span>
			My portfolio website is the go-to place for anyone who wants to learn more
			about what I do. It brings together my professional background, key
			projects, and ways to get in touch—all in one place. I’ve designed it to
			give a clear and complete picture of my skills, experience, and what I’ve
			accomplished so far, making it easy for potential collaborators or
			employers to get to know me.{" "}
		</span>
	);
};

const DevopsAbstract = () => {
	return (
		<span>
			I’m a DevOps enthusiast focused on building clean, scalable, and efficient
			systems. I spend a lot of time streamlining CI/CD pipelines, automating
			repetitive tasks, and keeping codebases consistent and easy to work with.
			I lean heavily on containerization for its flexibility and scalability,
			and I take linting seriously, not just because clean code looks better,
			but because it reduces cognitive load for reviewers and leads to better,
			more reliable outcomes.{" "}
		</span>
	);
};

const WaywardAbstract = () => {
	return (
		<span>
			Developed Wayward, a background daemon that monitors a directory for new
			files, performs custom post-processing, and relocates them based on file
			type. Implemented image content recognition to automatically rename images
			according to detected subjects, streamlining file organization and
			post-download workflows.{" "}
		</span>
	);
};

const FoodieFolderAbstract = () => {
	return (
		<span>
			Developed Foodie Folder, a mobile app built with Expo and React Native
			that allows users to capture images of restaurant menus, extract dish
			information via OCR, and maintain a personalized collection of dishes with
			notes and ratings for future reference.
		</span>
	);
};

const HagglebotAbstract = () => {
	return (
		<span>
			Developed Hagglebot, an AI-powered negotiation assistant that automates
			car buying haggling by analyzing dealer emails, extracting price offers,
			and generating strategic counter-offers to help buyers secure the best
			possible deals with minimal effort.
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
	foodie_folder: {
		link: "https://apps.apple.com/us/app/foodie-folder/id6738889379",
		image: FoodieFolderCard,
		text: "Foodie Folder",
		category: "Mobile",
		detail: FoodieFolderAbstract,
	},
	hagglebot: {
		link: "hagglebot/",
		image: HagglebotCard,
		text: "Hagglebot",
		category: "AI",
		detail: HagglebotAbstract,
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
