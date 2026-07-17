export const SatoshisWagerAbstract: () => JSX.Element = () => {
	return (
		<span>
			An interactive Bitcoin allocation calculator — Pascal's Wager rendered in
			dollars. You set your priors across six plausible futures, from total
			failure to hyperbitcoinization, and it returns the single portfolio
			allocation that survives all of them, with concrete rebalance actions.
			Built in React with a live price feed; click to try it.
		</span>
	);
};

export const SafeStreetsAbstract: () => JSX.Element = () => {
	return (
		<span>
			Safe Streets Colorado is a traffic-safety legislation tracker I built as a
			static Eleventy site. Each bill is a Markdown file with frontmatter that
			renders into its own detail page, so following a bill through the
			statehouse is a git commit, not a CMS login — a lightweight, versioned
			source of truth for civic advocates.
		</span>
	);
};

export const DenvAbstract: () => JSX.Element = () => {
	return (
		<span>
			denv is a Python CLI that redacts secrets from .env files so you can
			share, document, or log them safely. It parses quotes and comments
			correctly, masks values, keys, or both — optionally preserving length —
			and reads and writes over stdin/stdout, so it drops straight into a pipe.
		</span>
	);
};

export const BigWheelAbstract: () => JSX.Element = () => {
	return (
		<span>
			In 2015 I built and drove an eight-foot-tall mutant tricycle to Burning
			Man: a golf-cart base under a towering trike frame, wrapped in hundreds of
			individually addressable RGB LEDs driven by three Arduinos on battery
			power. Ten-foot handlebars, fifty six-foot ribbon streamers, and a lot of
			late-night wiring before the desert.
		</span>
	);
};

export const ConsoloAbstract: () => JSX.Element = () => {
	return (
		<span>
			Consolo is a Python CLI I published to PyPI that pseudo-mounts a deployed
			AWS Lambda's filesystem locally and hot-syncs your edits back up on save.
			It's built on boto3 and watchdog, installs with a single pip or curl
			command, and makes serverless work feel like editing a local project
			instead of round-tripping through the console.
		</span>
	);
};

export const FireTableAbstract: () => JSX.Element = () => {
	return (
		<span>
			An interactive fire installation I built for Burning Man in 2015. Propane,
			heavier than air, pools in grooves you rake into the sand; light it and
			the flame follows the low points, so the patterns you draw are the
			patterns that burn. No sensors or automation — just gas, physics, and
			whoever's raking.
		</span>
	);
};

export const CvAbstract: () => JSX.Element = () => {
	return <span>My CV</span>;
};

export const QuadricycleAbstract: () => JSX.Element = () => {
	return (
		<span>
			A four-frame parallel bicycle — "the quad" — I welded from scavenged
			aluminum frames and tubing for the deep playa. Stable enough to ride on
			sand without a kickstand, with a self-centering steering linkage, a canopy
			for shade, a storage trunk, and hundreds of addressable LEDs running a
			rainbow fade at night.
		</span>
	);
};

export const DockerAbstract: () => JSX.Element = () => {
	return (
		<span>
			My PyColorado talk, "Cleaning Up Your Python Environment: Does Your Python
			Environment Look Like a Superfund Site?" A practical walk through taming
			Python dev environments — containerizing for reproducible setups and using
			Docker Compose to run multi-service stacks with local databases.
		</span>
	);
};

export const LintingAbstract: () => JSX.Element = () => {
	return (
		<span>
			My PyDEN (Denver Python) talk on why linting earns its setup cost: it cuts
			cognitive load for readers and reviewers, not just bug count. I covered
			wiring up formatters like Black to get consistency with near-zero effort.
			The recording didn't survive the early-COVID scramble.
		</span>
	);
};

export const SnifterAbstract: () => JSX.Element = () => {
	return (
		<span>
			Snifter is a Python CLI on PyPI for peeking at ephemeral AWS SNS traffic.
			One command spins up a throwaway SQS queue, subscribes it to the topic you
			name, and streams the messages — with a debug flag that drops you into a
			live debugger on each payload. Ctrl-C tears the queue back down. No
			standing infrastructure needed to inspect a pub/sub topic.
		</span>
	);
};

export const JollyBrancherAbstract: () => JSX.Element = () => {
	return (
		<span>
			Jolly-Brancher (on PyPI) turns a JIRA ticket into a git branch and pull
			request in one step, baking the ticket ID and summary into the branch name
			and PR body and suggesting reviewers from CODEOWNERS. It's half Python CLI
			(jira, PyGithub, python-gitlab) and half Emacs interface — a full C-c j
			porcelain to list tickets, filter with JQL, start work, and open PRs
			without leaving the editor.
		</span>
	);
};

export const GithubAbstract: () => JSX.Element = () => {
	return (
		<span>
			My GitHub — the fuller picture behind these tiles. Open-source Python CLIs
			(Consolo, Snifter, Jolly-Brancher, all on PyPI), assorted experiments, and
			the day-to-day of how I build.
		</span>
	);
};

export const HomeAbstract: () => JSX.Element = () => {
	return <span>Back to the home page.</span>;
};

export const DevopsAbstract: () => JSX.Element = () => {
	return (
		<span>
			I work the CI/CD and infrastructure side across AWS and GCP — GitHub
			Actions, GitLab CI, CircleCI, Bitbucket Pipelines — building reproducible,
			containerized deploys. I take linting and code consistency seriously
			because they lower the cost of every review, not because tidy code looks
			nice.
		</span>
	);
};

export const WaywardAbstract: () => JSX.Element = () => {
	return (
		<span>
			Wayward is a Python background daemon (watchdog + python-daemon) that
			watches my downloads folder, waits for each file to finish writing, and
			routes it by type. Its main job is a Rocksmith custom-song pipeline: it
			converts .psarc files with pyrocksmith and SCPs them to my Mac's Steam
			library, working around an NFS-over-WiFi mount too slow for the game to
			read directly. It also OCRs screenshots to rename them by content.
		</span>
	);
};

export const FoodieFolderAbstract: () => JSX.Element = () => {
	return (
		<span>
			Foodie Folder is a cross-platform mobile app I shipped to the iOS App
			Store, built with Expo, React Native, and TypeScript. You photograph a
			restaurant menu and a GPT-vision OCR service turns it into structured
			dishes you can rate and save. Appwrite backs the data, Redux Toolkit holds
			state, and Google Places drives location-aware discovery.
		</span>
	);
};

export const HagglebotAbstract: () => JSX.Element = () => {
	return (
		<span>
			Hagglebot is an AI negotiation assistant that haggles car prices over
			email for you. A FastAPI backend (Python, SQLModel, async Postgres) pulls
			dealer emails over JMAP, uses an LLM to extract offers, and drafts
			counter-offers across several dealerships at once. Fully containerized,
			with a React frontend, Stripe billing, and deploy-on-push CI to
			DigitalOcean.
		</span>
	);
};

export const RentinityAbstract: () => JSX.Element = () => {
	return (
		<span>
			Rentinity is a design and proof-of-concept for fractional investment in
			triple-net-lease commercial real estate — each property tokenized as
			ERC-20 shares with automated rent distribution and token-weighted
			governance. A TypeScript Turborepo monorepo on Supabase and ethers.js,
			targeting Polygon, with a Wyoming Series-LLC-per-property structure and a
			deliberate off-chain-first path before going on-chain.
		</span>
	);
};

export const TonalRecallAbstract: () => JSX.Element = () => {
	return (
		<span>
			Tonal Recall is a fretboard-training game for guitar and bass that listens
			to you play. It shows a target note, detects your pitch in real time with
			aubio, and gives instant visual feedback across 15 levels, from open
			strings to pentatonic scales. Built in Python with Pygame, NumPy, and
			sounddevice; works with any audio interface, including the Rocksmith USB
			adapter.
		</span>
	);
};

export const ToyContractorAbstract: () => JSX.Element = () => {
	return (
		<span>
			Toy Contractor generates and iteratively refines legal contracts from
			plain-English prompts, running entirely on a self-hosted Mistral model via
			Ollama — no external API. A FastAPI service handles generation, Redis
			keeps a versioned revision history, and a Python CLI drives it: describe a
			contract, then refine it with instructions like "add a 30-day termination
			clause." Fully docker-composed.
		</span>
	);
};

export const ResumeBuildPipelineAbstract: () => JSX.Element = () => {
	return (
		<span>
			An automated pipeline that builds my resume from a single Org-mode source
			into PDF, LaTeX, DOCX, and HTML. The build runs in Emacs via custom Elisp
			and deploys over SCP — one source of truth, every format generated on
			command, no copy-paste between Word docs.
		</span>
	);
};
