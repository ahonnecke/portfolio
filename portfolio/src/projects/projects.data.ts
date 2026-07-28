// Project tiles, rendered in the Case Studies card style for one visual
// language across the site. Each card links to its detail page (or, for the
// CV PDF and the hosted demo, directly to the file/app).

export interface ProjectCardData {
	/** Click target: a route ("/consolo"), a file ("/cv/cv.pdf"), or a
	    same-origin app ("/prototypes/..."). */
	to: string;
	title: string;
	/** "Category · Tech" — replaces the old scattered single categories. */
	tag: string;
	/** One-line description. */
	blurb: string;
	/** CSS gradient for the card face. */
	accent: string;
	/** Where the project ultimately lives (PyPI / GitHub / Live site / …).
	    Optional — omitted for pieces with no public destination. */
	home?: string;
}

const G = {
	slate: "linear-gradient(135deg, #2b3a4a 0%, #1a2530 55%, #0c1218 100%)",
	red: "linear-gradient(135deg, #ea5c48 0%, #a83a2c 60%, #2a120e 100%)",
	amber: "linear-gradient(135deg, #fea11c 0%, #a4681a 60%, #2a1c08 100%)",
	green: "linear-gradient(135deg, #1f8a4c 0%, #12633a 55%, #06180f 100%)",
	lime: "linear-gradient(135deg, #7aa22e 0%, #4f6b1e 55%, #161d08 100%)",
	indigo: "linear-gradient(135deg, #4b2d7f 0%, #33205a 55%, #150e26 100%)",
	teal: "linear-gradient(135deg, #0f6f6a 0%, #0a4a47 55%, #041817 100%)",
	bitcoin: "linear-gradient(135deg, #f7931a 0%, #b5651d 55%, #2a1a0e 100%)",
	blue: "linear-gradient(135deg, #2b6cb0 0%, #1c4a7a 55%, #0a1826 100%)",
	rose: "linear-gradient(135deg, #c0603a 0%, #7d3c22 55%, #20100a 100%)",
	fire: "linear-gradient(135deg, #ff4820 0%, #9c2a12 55%, #260a05 100%)",
	night: "linear-gradient(135deg, #1e3a5f 0%, #12233d 55%, #060c16 100%)",
	olive: "linear-gradient(135deg, #5a7d3a 0%, #3a5326 55%, #121b0c 100%)",
	steel: "linear-gradient(135deg, #3a4654 0%, #232c36 55%, #0c1116 100%)",
};

export const projects: ProjectCardData[] = [
	{
		to: "/github",
		title: "GitHub",
		tag: "Profile · Open Source",
		blurb:
			"Open-source Python CLIs, experiments, and the day-to-day of how I build.",
		accent: G.blue,
		home: "GitHub",
	},
	{
		to: "/consolo",
		title: "Consolo",
		tag: "FOSS · Python",
		blurb:
			"Pseudo-mounts a deployed AWS Lambda's filesystem locally and hot-syncs your edits, on boto3 and watchdog.",
		accent: G.red,
		home: "PyPI",
	},
	{
		to: "/snifter",
		title: "Snifter",
		tag: "FOSS · AWS",
		blurb:
			"Inspects ephemeral AWS SNS traffic through a throwaway SQS queue, with live interactive debugging.",
		accent: G.amber,
		home: "PyPI",
	},
	{
		to: "/denv",
		title: "denv",
		tag: "Security · Python",
		blurb:
			"Redacts secrets from .env files — value, key, or both; quote-aware; works over stdin/stdout.",
		accent: G.slate,
		home: "GitHub",
	},
	{
		to: "/shush",
		title: "shush",
		tag: "Security · Python",
		blurb:
			"Constrained SSH for LLM automation: allowlisted commands, enforced in two independent layers.",
		accent: G.steel,
		home: "GitHub",
	},
	{
		to: "/safe_streets",
		title: "Safe Streets CO",
		tag: "Civic · Eleventy",
		blurb:
			"A Colorado traffic-safety legislation tracker, each bill a Markdown file. Live at safestreetsco.com.",
		accent: G.green,
		home: "Live site",
	},
	{
		to: "/jolly_brancher",
		title: "Jolly Brancher",
		tag: "FOSS · Python",
		blurb:
			"Turns a JIRA ticket into a git branch and pull request in one step. A Python CLI plus a full Emacs interface.",
		accent: G.lime,
		home: "PyPI",
	},
	{
		to: "/wayward",
		title: "Wayward",
		tag: "Tools · Python",
		blurb:
			"A background daemon that routes downloaded files by type, built around a Rocksmith custom-song pipeline.",
		accent: G.indigo,
		home: "GitHub",
	},
	{
		to: "/foodie_folder",
		title: "Foodie Folder",
		tag: "Mobile · React Native",
		blurb:
			"Turns restaurant-menu photos into structured dishes via GPT-vision OCR. Expo, TypeScript, Appwrite.",
		accent: G.olive,
	},
	{
		to: "/hagglebot",
		title: "Hagglebot",
		tag: "AI · FastAPI",
		blurb:
			"Haggles car prices over email — FastAPI, async Postgres, JMAP, and an LLM offer-extraction pipeline.",
		accent: G.indigo,
		home: "GitHub",
	},
	{
		to: "/rentinity",
		title: "Rentinity",
		tag: "Blockchain · TypeScript",
		blurb:
			"A proof-of-concept for fractional triple-net-lease real estate tokenized as ERC-20 shares on Polygon.",
		accent: G.green,
	},
	{
		to: "/prototypes/satoshis-wager/",
		title: "Satoshi's Wager",
		tag: "Fintech · React",
		blurb:
			"A Bitcoin allocation calculator — Pascal's Wager in dollars. Set your priors, get the surviving allocation.",
		accent: G.bitcoin,
		home: "Live demo",
	},
	{
		to: "/tonal_recall",
		title: "Tonal Recall",
		tag: "Game · Python",
		blurb:
			"A real-time fretboard-training game for guitar and bass using aubio pitch detection. Pygame, NumPy.",
		accent: G.rose,
		home: "GitHub",
	},
	{
		to: "/toy_contractor",
		title: "Toy Contractor",
		tag: "AI · Python",
		blurb:
			"Generates legal contracts from plain English on a self-hosted Mistral model via Ollama. FastAPI, Redis.",
		accent: G.teal,
		home: "GitHub",
	},
	{
		to: "/docker",
		title: "Containers",
		tag: "Talk · PyColorado",
		blurb:
			"Cleaning Up Your Python Environment — containerizing dev environments with Docker and Docker Compose.",
		accent: G.blue,
		home: "Watch",
	},
	{
		to: "/linting",
		title: "Linting",
		tag: "Talk · PyDEN",
		blurb:
			"Why linting is worth the setup: it cuts reviewer cognitive load, not just bug count.",
		accent: G.steel,
		home: "Slides",
	},
	{
		to: "/devops",
		title: "DevOps",
		tag: "Practice · CI/CD",
		blurb:
			"CI/CD and containerized deploys across AWS and GCP — GitHub Actions, GitLab CI, CircleCI, and more.",
		accent: G.slate,
	},
	{
		to: "/big_wheel",
		title: "Big Wheel",
		tag: "Art · Hardware",
		blurb:
			"An eight-foot mutant tricycle for Burning Man, wrapped in hundreds of addressable RGB LEDs on Arduinos.",
		accent: G.night,
		home: "Photos",
	},
	{
		to: "/fire_table",
		title: "Fire Table",
		tag: "Art · Hardware",
		blurb:
			"An interactive propane fire installation — the patterns you rake into the sand become patterns of flame.",
		accent: G.fire,
		home: "Video",
	},
	{
		to: "/quadricycle",
		title: "Quadricycle",
		tag: "Art · Hardware",
		blurb:
			"A four-frame parallel bicycle welded for the deep playa, with self-centering steering and hundreds of LEDs.",
		accent: G.night,
		home: "Photos",
	},
];
