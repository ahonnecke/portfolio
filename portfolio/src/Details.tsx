import { navMap } from "./NavMap";

import resumeInvokeBuild from "../public/cv_build/blue_background_black_border_red_arrow_pointing_top_left_corner.png";
import resumeElispBuild from "../public/cv_build/code_screen_programming_displays_computer_large_amount_written_language.png";
import resumeOrgMode from "../public/cv_build/screen_code_written_computer_displaying_lot_code.png";
import resumeDeployment from "../public/cv_build/screen_computer_black_background_white_displaying_program_code.png";
import myVideo from "../public/fire_table.mov";
import quadFlash from "../public/quad_flashton.jpg";
import quadLit from "../public/quad_lit.jpg";

import { Link } from "react-router-dom";

export function BigWheel() {
	const navData = navMap.big_wheel;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<p>
						Building and taking a mutant vehicle to Burning Man in 2015 was an
						experience of a lifetime. The vehicle, a whimsical fusion of a
						tricycle and a golf cart, stood tall at eight feet. It was a sight
						to behold, especially when it lit up the night with hundreds of
						lights, all controlled by two Arduino microcontrollers powered by
						onboard batteries.
					</p>
					<p>
						The base is a standard golf cart, chosen for stability and easy
						operation. On top of it I built an eight-foot-tall tricycle
						structure, with handlebars ten feet wide wrapped in lights and fifty
						six-foot ribbon streamers off each handle that trailed as it moved.
					</p>
					<p>
						The whole thing ran on two Arduinos driving hundreds of lights off
						onboard batteries — enough of a hardware and power-budget problem
						that it was as much an electronics build as a fabrication one.
					</p>
				</div>
			</Link>
		</span>
	);
}

export function FireTable() {
	const navData = navMap.fire_table;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<p>
						I designed and created an interactive fire installation art project,
						titled "Fire in Earth". This project was placed on playa in 2015.
					</p>

					<p>
						The video below shows the Fire Table, in action, the propane burning
						in the valleys of the sand in which spirals have been drawn.
					</p>

					<video controls autoPlay loop muted>
						<source src={myVideo} type="video/mp4" />
					</video>

					<p>
						Under the sand sits a custom copper manifold I brazed with silver
						solder to take the heat, fed propane from a regulator on a 20 lb
						tank so most of the system runs at negligible pressure. Gas seeps up
						through the sand and waits in whatever grooves are raked into it.
					</p>
					<p>
						That's the whole interaction: people draw valleys in the sand, the
						propane pools in them, and the fire traces the lines they made. Rake
						a new pattern and the flame follows it. The piece is never the same
						twice because the visitors keep redrawing it.
					</p>
				</div>
			</Link>
		</span>
	);
}

export function CV() {
	const navData = navMap.cv;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="content">
					<Link to="https://pixelstub.com/">
						Also available in interactive sphinx format
					</Link>
					, really though, this is the least interesting page on the site.
					<p>
						You can download my full CV{" "}
						<a href={navData.link} target="_blank" rel="noopener noreferrer">
							here
						</a>
						.
					</p>
				</div>
			</Link>
		</span>
	);
}

export function Quadricycle() {
	const navData = navMap.quadricycle;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<img src={quadLit} alt="Quadricycle" />
						<p>
							{" "}
							I built a parallel double bicycle—affectionately known as “the
							quad,” or technically, a quadricycle. It was a weird and wonderful
							blend of engineering and creativity. I got to flex everything from
							problem-solving and fabrication to some embedded programming
							(because yes, the lights matter).{" "}
						</p>

						<p>
							{" "}
							The quadricycle started as four scavenged aluminum “La Jolla”
							frames and a pile of aluminum tubing. I welded the frames together
							in parallel, giving it an ultra-stable platform... really lovely
							if you’re riding on sand and don’t want to face-plant. I
							engineered a self-centering steering mechanism so handling it
							feels effortless, almost like it steers itself. I even added a
							trunk for storage, because what’s the point of a ridiculous
							multi-person bike if you can’t haul snacks? A superstructure of
							custom aluminum struts supported aluminet in the day for shade,
							and the lights at night
						</p>

						<img src={quadFlash} alt="Quadricycle " />

						<p>
							{" "}
							Then came the fun part: I covered the whole thing in hundreds of
							lights. It looked like a rolling party, equal parts art and
							engineering. Getting the lighting system integrated cleanly
							required custom wiring and embedded code, which made the whole
							thing feel like a proper hardware project—not just a Frankenstein
							bike experiment.{" "}
						</p>

						<img src={quadLit} alt="Quadricycle Lights" />

						<p>
							{" "}
							The first test ride was a success, and honestly, seeing something
							that started as a pile of scrap metal turn into a rideable,
							glowing, joy-machine felt amazing. It’s one of my favorite builds
							and a great example of what happens when I decide to mix
							engineering, creativity, and a little bit of chaos.{" "}
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Docker() {
	const navData = navMap.docker;
	return (
		<span className="detailPage">
			<div className="content">
				<div>
					<img src={navData.image} alt={navData.text} />
					<h2>{navData.text}</h2>
					<p>
						My talk, <em>“Cleaning Up Your Python Environment”</em>, is a
						straightforward guide to taking the chaos out of Python development.
						I kicked things off with Randall Munroe’s classic XKCD comic about
						Python environment disasters—because let’s be honest, we’ve all been
						there. From there, I walked through real-world strategies for
						keeping things clean, reproducible, and maintainable.
					</p>
					<p>
						I covered tools, patterns, and techniques that help avoid common
						pitfalls—like how to use containers for isolation, and Docker
						Compose to manage multi-service environments (especially databases).
						The goal was to make Python workflows less painful and easier to
						share across teams.
					</p>
					<p>
						The through-line: tooling should reduce cognitive load, not add to
						it. Containers and Compose aren't the point — a dev environment you
						can hand to a teammate and have it work on the first try is.
					</p>
					<ul>
						<li>
							<Link to="https://www.youtube.com/watch?v=cpseEHA_haA">
								Watch the presentation
							</Link>
						</li>
						<li>
							<Link to="https://github.com/ahonnecke/superfund-remediation">
								Included materials
							</Link>
						</li>
					</ul>
					<p>
						You can watch the full presentation{" "}
						<a href={navData.link} target="_blank" rel="noopener noreferrer">
							here
						</a>
						.
					</p>
				</div>
			</div>
		</span>
	);
}

export function Consolo() {
	const navData = navMap.consolo;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built <strong>Consolo</strong> as a free and open source utility
							for pseudo-mounting an AWS Lambda filesystem locally. It’s
							designed to make serverless development feel a bit more like
							working with a local codebase—hot reloading included, by default.
						</p>
						<p>Consolo’s main features include:</p>
						<ul>
							<li>
								<strong>Hot Syncing:</strong> It can automatically sync with
								your Lambda codebase so you can make changes locally and see
								them take effect immediately.
							</li>
							<li>
								<strong>Upload and Download:</strong> You can push changes to
								the cloud or pull down the latest from a Lambda function using a
								simple flag.
							</li>
							<li>
								<strong>Easy Install:</strong> Installable with a single curl
								command or via <code>pip install</code>.
							</li>
						</ul>
						<p>
							It’s written in Python using libraries like <code>argdantic</code>
							, <code>requests</code>, <code>watchdog</code>, and{" "}
							<code>boto3</code>, and is built to be both fast and
							developer-friendly.
						</p>
						<p>It's pronounced "Con Solo," like Han Solo.</p>
						<p>
							You can browse the Consolo project on PyPI{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Snifter() {
	const navData = navMap.snifter;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built <strong>Snifter</strong> to make it easier to inspect data
							coming through AWS SNS topics. Since SNS messages are ephemeral,
							there’s no built-in way to pause and look at them unless you
							subscribe to something like email or SMS—which isn’t exactly ideal
							for debugging. Snifter solves that by creating a temporary SQS
							queue, subscribing it to your topic, and watching the queue—all in
							a single command.
						</p>
						<p>Key features include:</p>
						<ul>
							<li>
								<strong>Live Streaming:</strong> It starts watching SNS messages
								in real time with minimal setup.
							</li>
							<li>
								<strong>Interactive Debugging:</strong> Add the{" "}
								<code>--debug</code> flag to drop into a debugger as messages
								arrive—great for digging into payload structure on the fly.
							</li>
							<li>
								<strong>Simple CLI:</strong> Clean and intuitive command-line
								interface that works with any AWS profile and topic ARN.
							</li>
						</ul>
						<p>
							Snifter is written in Python on top of boto3. The whole point is
							that it leaves nothing behind — the SQS queue and subscription
							exist only while you're watching, so you can inspect what a topic
							is emitting without standing up permanent infrastructure or
							touching the topic's real subscribers.
						</p>
						<p>
							You can browse the Snifter project on PyPI{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function JollyBrancher() {
	const navData = navMap.jolly_brancher;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built <strong>Jolly-Brancher</strong> to automate one of the
							most tedious parts of dev workflow: wiring up your git branches to
							your ticketing system. It’s a free and open source tool that
							connects JIRA to GitHub, and helps streamline everything from
							branch creation to PR description.
						</p>
						<p>Here’s what it can do:</p>
						<ul>
							<li>
								<strong>Branch Creation:</strong> Point it at a repo and a JIRA
								ticket, and it’ll create a new branch with the ticket ID and
								summary baked into the branch name and metadata.
							</li>
							<li>
								<strong>Pull Review Creation:</strong> It can generate a pull
								request from a well-formed branch with a single command.
							</li>
							<li>
								<strong>Auto-filled Descriptions:</strong> The PR body gets
								pre-filled with ticket details so you don’t have to copy-paste
								or write from scratch.
							</li>
							<li>
								<strong>Configurable:</strong> Set your JIRA and GitHub
								credentials in
								<code>~/.config/jolly_brancher.ini</code> and you’re ready to
								go.
							</li>
						</ul>
						<p>
							Under the hood it's Python (jira, PyGithub, python-gitlab,
							prompt_toolkit) with a substantial Emacs Lisp layer on top — the
							author's own description is "half lisp, half python." The Emacs
							interface, all under a <code>C-c j</code> prefix, lets you list
							and filter tickets with JQL, start work (which cuts the branch),
							and end work (which opens the PR) without leaving the editor. It
							even reads CODEOWNERS to suggest reviewers.
						</p>
						<p>
							You can browse the Jolly-Brancher project on PyPI{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Github() {
	const navData = navMap.github;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>GitHub</h2>
					<div>
						<p>
							My GitHub is the fuller picture behind these tiles: the
							open-source Python CLIs I maintain on PyPI (Consolo, Snifter,
							Jolly-Brancher), one-off tools and experiments, and the commit
							history behind them. Most of what's on this site links back to a
							repo there.
						</p>
						<p>
							You can browse my GitHub repositories{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Linting() {
	const navData = navMap.linting;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I gave this talk at PyDEN, the Denver Python meetup, on why
							linting is worth the setup. The recording didn't survive the
							early-COVID scramble, so the write-up here is what remains of it.
						</p>
						<p>
							The argument: linting pays off less for the bugs it catches than
							for the cognitive load it removes. Consistent, auto-formatted code
							is code a reviewer can read without re-parsing everyone's personal
							style, which is most of what makes a review slow. I walked through
							wiring up formatters like <code>black</code> to get that
							consistency with almost no ongoing effort.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Devops() {
	const navData = navMap.devops;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>DevOps</h2>
					<div>
						<p>
							Most of my work lives on the CI/CD and infrastructure side:
							building reproducible, containerized deploys and automating the
							repetitive parts of shipping software. I've built and maintained
							pipelines on GitHub Actions, GitLab CI, CircleCI, and Bitbucket
							Pipelines, deploying to AWS and GCP.
						</p>
						<p>
							I take linting and formatting seriously — not for tidiness, but
							because consistent code lowers the cost of every review and lets a
							team read each other's work without friction. The same instinct
							runs through the tooling I build: small, sharp utilities that
							remove a recurring chore.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Wayward() {
	const navData = navMap.wayward;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built <strong>Wayward</strong> as a Python background daemon
							(watchdog + python-daemon) that watches my downloads folder, waits
							for each file to finish writing — it considers a file done once it
							hasn't changed for five seconds, which avoids acting on a partial
							download — and then routes it by type.
						</p>
						<p>
							Its real job is a Rocksmith custom-song pipeline. My song library
							lives on a NAS, but the NFS-over-WiFi mount tops out around 540
							KB/s — too slow for the game to stream charts from directly. So
							Wayward converts each downloaded <code>.psarc</code> with{" "}
							<code>pyrocksmith</code> and SCPs the result into my Mac's Steam
							library, with a staging → live → quarantine lifecycle. As a
							sideline, it OCRs screenshots and renames them by their contents.
						</p>
						<p>
							You can learn more about Wayward{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function FoodieFolder() {
	const navData = navMap.foodie_folder;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built and shipped <strong>Foodie Folder</strong>, a
							cross-platform mobile app for keeping track of dishes worth
							remembering. You photograph a restaurant menu and the app returns
							it as structured dishes — title, description, price — that you can
							rate, annotate, and search later.
						</p>
						<p>
							The OCR is the interesting part: rather than classic text
							extraction, menu photos go to a small Node/Express service that
							runs them through OpenAI's GPT vision model and returns clean
							JSON, which handles the messy typography and layout of real menus
							far better than template OCR. Google Places and maps power
							location-aware discovery of nearby restaurants.
						</p>
						<p>
							The app is Expo and React Native in TypeScript, with expo-router
							for navigation, Redux Toolkit for state, and Appwrite as the
							backend-as-a-service. It was built and released through EAS Build
							and published to the iOS App Store.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Hagglebot() {
	const navData = navMap.hagglebot;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I developed <strong>Hagglebot</strong>, an AI-powered negotiation
							assistant that helps car buyers get the best possible deals when
							purchasing vehicles. The system automates the haggling process by
							analyzing dealer responses, identifying price offers, and
							generating strategic counter-offers to push for better pricing.
						</p>
						<p>
							It runs several dealership threads at once and keeps context
							across a long back-and-forth. The backend ingests dealer emails
							over JMAP, uses an LLM to pull out the numbers that matter —
							price, incentives, conditions — and drafts the next counter-offer
							to advance the buyer's position.
						</p>
						<p>
							The backend is FastAPI on Python 3.12 with SQLModel over async
							Postgres and Alembic migrations; email flows through JMAP and
							Brevo, payments through Stripe, and auth through JWT. A React
							frontend sits on top, and the whole thing is docker-composed with
							deploy-on-push CI (auto-running migrations) to DigitalOcean.
						</p>
						<p>
							You can browse the Hagglebot project repository{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Rentinity() {
	const navData = navMap.rentinity;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I developed <strong>Rentinity</strong>, a blockchain-based
							platform for fractional real estate investment focused on NNN
							(Triple Net Lease) properties. The platform enables investors to
							purchase tokenized shares of commercial properties, creating a
							pathway for smaller investors to access previously inaccessible
							real estate markets with low-touch rental income and eventual
							liquidity.
						</p>
						<p>
							The system implements a complete property investment lifecycle,
							from seller onboarding and Wyoming Series LLC formation to
							property tokenization using ERC-20 tokens on the Polygon
							blockchain. Investors can purchase fractional ownership, receive
							automated rent distributions, and participate in property
							governance through a token-weighted voting system.
						</p>
						<p>
							It's built as a TypeScript Turborepo monorepo on Supabase and
							ethers.js, with web and mobile apps, ERC-20 contracts for the cap
							table (60-day lockup, whitelisted transfers), and an admin
							dashboard for batch-minting tokens and processing rent
							distributions by ownership percentage. The design phases
							deliberately: an off-chain Postgres ledger with KYC and ACH first,
							migrating on-chain once the mechanics are proven.
						</p>
						<p>
							Rentinity is at the design and proof-of-concept stage; the source
							isn't public.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function TonalRecall() {
	const navData = navMap.tonal_recall;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I developed <strong>Tonal Recall</strong>, an interactive
							guitar-training game that teaches fretboard fluency and
							ear-training through real-time feedback. The application allows
							guitarists to connect via any audio interface, see a target note
							on screen, play it, and receive instant visual feedback on
							accuracy.
						</p>
						<p>
							The game features multiple difficulty levels that scale from
							beginner to intermediate players, real-time pitch detection from
							live guitar input, and a visual comparison of played versus target
							notes.
						</p>
						<p>
							It's Python — Pygame for the interface, NumPy for signal
							processing, and sounddevice with aubio for pitch detection off the
							live audio input. It works with any interface, including the
							Rocksmith USB adapter, and ships a built-in tuner alongside the
							drills. The level layout is data-driven, so adding a new mode is a
							config change, not a rewrite.
						</p>
						<p>
							You can browse the Tonal Recall project repository{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function ToyContractor() {
	const navData = navMap.toy_contractor;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built <strong>Toy Contractor</strong> to generate and
							iteratively refine legal contracts from plain-English prompts.
							What makes it interesting is that it runs entirely on a
							self-hosted Mistral 7B model via Ollama — no external API, nothing
							leaves the box — which is exactly the property you'd want for
							anything touching contract text.
						</p>
						<p>
							A FastAPI service handles generation and a Redis store keeps a
							versioned revision history, so refinement is a real workflow: you
							create a contract, then hand it back an instruction like "add a
							30-day termination clause" and get a new version with the old one
							preserved. A Python CLI drives the whole loop.
						</p>
						<p>
							The stack — FastAPI, Redis, Ollama, and the CLI client — is wired
							together with Docker Compose, so the whole thing comes up with a
							single command.
						</p>
						<p>
							You can browse the Toy Contractor project repository{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function ResumeBuildPipeline() {
	const navData = navMap.resume_build_pipeline;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							I built an automated pipeline that transforms my resume from
							Org-mode source files into PDF, LaTeX, DOCX, and HTML outputs. The
							entire build process runs in Emacs using custom Elisp, with
							deployment handled via SCP over bash.
						</p>
						<p>
							The workflow starts with Org-mode as the source format, applies
							custom formatting rules, and exports to multiple formats through
							Elisp build scripts. This lets me maintain a single source file,
							make edits in my preferred environment, and generate all output
							formats with a single command.
						</p>
						<p>Below are screenshots showing the build process in action:</p>
						<div className="screenshots">
							<h3>My resume in Org-mode</h3>
							<img src={resumeOrgMode} alt="Resume source in Org-mode" />

							<h3>The Elisp that builds and formats my CV</h3>
							<img src={resumeElispBuild} alt="Elisp build script" />

							<h3>Invoking the build process from inside Emacs</h3>
							<img src={resumeInvokeBuild} alt="Build invocation in Emacs" />

							<h3>Deployment</h3>
							<img src={resumeDeployment} alt="SCP deployment" />
						</div>
						<p>
							It's a straightforward example of treating documentation as code—
							version controlled, automated, and reproducible. No manual
							copy-pasting between Word docs or fighting with formatting
							inconsistencies.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function SafeStreets() {
	const navData = navMap.safe_streets;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							<strong>Safe Streets Colorado</strong> is a legislation tracker
							for traffic-safety bills, growing out of my street-safety
							advocacy. It follows bills through the Colorado statehouse and
							lays out what each one actually does, in plain language, for
							people who want to show up and testify but don't have time to read
							a statute.
						</p>
						<p>
							It's built as a static Eleventy site, and the content model is the
							interesting part: each bill is a single Markdown file with
							frontmatter, and a Nunjucks layout renders it into a full detail
							page. Adding or updating a bill is a git commit — no database, no
							CMS login — which keeps the whole record versioned, reviewable,
							and cheap to host on Cloudflare Pages.
						</p>
						<p>
							The source is on GitHub{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export function Denv() {
	const navData = navMap.denv;
	return (
		<span className="detailPage">
			<Link to={navData.link}>
				<img src={navData.image} alt={navData.text} />
				<div className="content">
					<h2>{navData.text}</h2>
					<div>
						<p>
							<strong>denv</strong> is a small Python CLI that redacts secrets
							from <code>.env</code> files, so you can paste one into an issue,
							check an example into a repo, or log your environment without
							leaking credentials.
						</p>
						<p>
							It does the fiddly parts correctly: it preserves comments, blank
							lines, and formatting, handles single, double, and escaped quotes,
							and can mask values, keys, or both — optionally keeping the
							original length so a redacted file still looks plausible. It can
							also strip whole lines whose keys look sensitive. Because it reads
							and writes over stdin/stdout, it composes into a pipe:{" "}
							<code>cat .env | denv</code>.
						</p>
						<p>
							The source is on GitHub{" "}
							<a href={navData.link} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}
