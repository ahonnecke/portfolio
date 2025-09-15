import { navMap } from "./NavMap.tsx";

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
						The construction of the vehicle was a feat of engineering and
						creativity. The base was a standard golf cart, chosen for its
						stability and ease of operation. On top of this, an eight-foot tall
						tricycle structure was built, transforming the ordinary golf cart
						into an extraordinary mutant vehicle. The handlebars, a massive 10
						feet wide, were wrapped in lights, creating a dazzling display that
						could be seen from afar. Adding to the spectacle were fifty six-foot
						ribbon streamers attached to either handle, fluttering in the wind
						as the vehicle moved, creating a beautiful, flowing light show.
					</p>
					<p>
						The mutant vehicle was not just a means of transportation, but a
						moving piece of art, embodying the spirit of self-expression and
						creativity that is at the heart of Burning Man. It was a testament
						to the power of imagination and the joy of bringing a vision to
						life. And as it moved through the playa, it brought smiles to the
						faces of everyone who saw it, lighting up the night and the hearts
						of the Burning Man community.
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
						The installation was a testament to the my innovative approach to
						combining technology and art. It featured a custom copper manifold
						that was brazed with silver solder, capable of withstanding high
						temperatures. The manifold was fed propane directly from a regulator
						on a 20 LB tank, ensuring the majority of the system was under
						negligible pressure.
					</p>
					<p>
						One of the unique features of this installation was its interactive
						nature. Visitors could engage with the installation, effectively
						drawing with fire by creating valleys in sand. This created a
						dynamic and ever-changing display of fire. This interactive element
						added a level of engagement and excitement for the visitors, making
						the installation not just a piece of art to be observed, but also an
						experience to be participated in.
					</p>
					<p>
						This project showcased the artist's skills in design, fabrication,
						and installation of large-scale art projects. It stands as a
						testament to my creativity, technical skills, and my ability to
						create engaging and interactive art installations.
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
							In a combination of engineering and creativity, I designed and
							constructed a two-bicycle, serial tandem bicycle, also known as a
							quadricycle. This unique project showcased the candidate's
							problem-solving skills, hands-on fabrication abilities, and
							passion for cycling.
						</p>

						<p>
							The quadricycle was built from four scavenged aluminum "La Jolla"
							frames, and aluminum stock tubing. The frames were welded together
							in parallel, gincreasing stability, particularly important on
							sandy terrains preventing the quadricycle from falling over. A
							self-centering mechanism was ingeniously incorporated into the
							steering system, enhancing maneuverability and control. The
							candidate thoughtfully added a trunk for storage, demonstrating my
							attention to practicality and user experience. A shaded parasol
							was mounted on aluminum struts, providing comfort for the riders
							under the sun.
						</p>
						<img src={quadFlash} alt="Quadricycle" />
						<p>
							In a fusion of technology and art, the quadricycle was adorned
							with hundreds of lights, creating a dazzling display that added to
							the joy of riding it. The candidate's ability to integrate
							electronic components into the design highlighted my
							multidisciplinary skills. The successful completion of the
							quadricycle, followed by a successful test ride, stands as a
							testament to the candidate's technical skills, creativity, and
							dedication to bringing a vision to life. This project is a notable
							accomplishment and a valuable addition to the candidate's resume.
							It truly embodies the spirit of innovation and creativity.
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
						What I enjoyed most was breaking down the complexity into something
						approachable. The talk reflects not just my technical background,
						but my belief that knowledge should be shared and tooling should
						reduce cognitive load—not add to it. It's a talk I'm proud to
						include as part of my professional work.
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
						<p>
							It’s pronounced "Con Solo"—like Han Solo—which felt like the right
							blend of utility and fun.
						</p>
						<p>
							Consolo is a good example of my approach to building lightweight,
							practical tools that improve everyday developer workflows. I
							designed it to scratch my own itch, but it turned out to be useful
							for others too—which is always the goal.
						</p>
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
							Snifter is written in Python and leverages AWS SDK tooling under
							the hood. It’s a lightweight, throwaway tool I use to troubleshoot
							or understand what a topic is emitting—without needing to set up
							permanent infrastructure.
						</p>
						<p>
							It's a small utility, but a great example of my approach:
							practical solutions for real problems that developers run into all
							the time.
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
							Jolly-Brancher is written in Python and designed to reduce context
							switching for developers. It’s currently focused on JIRA and
							GitHub, but I have plans to expand support and add features like
							comment extraction and auto-generated branch summaries.
						</p>
						<p>
							At its core, it's about reducing friction. I built it to eliminate
							repetitive tasks and let me (and hopefully others) stay focused on
							actual code—not copy-pasting ticket IDs.
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
							My GitHub profile is a living portfolio that showcases how I
							think, code, and collaborate. It gives a real-time view into the
							projects I’ve built, the open source work I’ve contributed to, and
							how I approach software development as a whole.
						</p>
						<p>Some highlights include:</p>
						<ul>
							<li>
								<strong>Repositories:</strong> Each repo tells a story—what I
								built, why I built it, and how it works. I include detailed
								READMEs, clear commit history, and clean, documented code.
							</li>
							<li>
								<strong>Contributions:</strong> My contribution graph reflects
								my commitment to continuous improvement and active engagement
								with the community.
							</li>
							<li>
								<strong>Stars:</strong> Stars on my projects serve as peer
								feedback, showing what others have found useful or inspiring.
							</li>
							<li>
								<strong>Forks:</strong> Seeing others build on top of my work is
								one of the most rewarding aspects of sharing code—it’s proof
								that what I’ve made has real value.
							</li>
						</ul>
						<p>
							Whether you're looking at my solo builds or team contributions,
							GitHub is the best place to see what I bring to the table as a
							developer.
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
							I gave a local talk on the value of linting; unfortunately, the
							recording didn't survive the early chaos of COVID, but{" "}
							<Link to="https://github.com/ahonnecke/linting">
								the slides and materials
							</Link>{" "}
							are still available on GitHub.
						</p>
						<p>
							In the talk, I explored why linting matters—not just for catching
							bugs, but for improving readability, reducing cognitive load, and
							keeping teams aligned. I covered how to set up linting tools (like{" "}
							<code>black</code>, at the time), integrate them into your
							workflow, and use them to maintain high-quality, consistent
							codebases.
						</p>
						<p>
							The session was aimed at both new and experienced developers, and
							focused on real-world tips that go beyond the docs. Preparing and
							delivering it pushed me to think deeply about code quality and how
							small tooling decisions scale across teams.
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
							I’m a passionate advocate for CI/CD, a firm believer in the power
							of containers, and someone who genuinely enjoys automating away
							repetitive tasks to create efficient, reliable workflows. I place
							a strong emphasis on clean code practices—especially through
							consistent and thoughtful linting—and I’m always aiming to build
							systems that are both robust and maintainable.
						</p>
						<p>
							My tooling spans across multiple cloud providers and CI platforms,
							so I’m comfortable building and deploying in diverse environments.
							Whether it’s AWS, GCP, or another provider—or CI systems like
							GitHub Actions, GitLab CI, CircleCI, or Bitbucket Pipelines—I’ve
							worked across them to deliver smooth, automated pipelines.
						</p>
						<p>
							My repositories reflect this approach: they feature projects I’ve
							initiated or contributed to, with clean source code, detailed
							READMEs, and a history of commits that demonstrate my focus on
							solving real-world problems and continuously improving the
							developer experience.
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
							I built <strong>Wayward</strong> as a background daemon in Python
							to keep my downloads folder organized without me having to think
							about it. It watches for newly downloaded files, waits until
							they’re fully written (determined by checking that they haven’t
							changed for 5 seconds), and then runs them through a custom
							post-processing function.
						</p>
						<p>
							Once processed, the file is moved to its proper
							destination—completely hands-free. The logic for what to do with
							each file is totally flexible and written in Python, so it’s easy
							to extend or adapt for different workflows.
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
							I developed <strong>Foodie Folder</strong>, a mobile application
							built with Expo and React Native that transforms how food
							enthusiasts document their culinary experiences. The app allows
							users to capture images of restaurant menus, which are then
							processed through OCR (Optical Character Recognition) to extract
							and structure dish information automatically.
						</p>
						<p>
							Users can save dishes from various restaurants, add personal notes
							and ratings for each item, and build a personalized food diary
							over time. The app features an intuitive interface for browsing
							past entries, searching by dish or restaurant, and sharing
							recommendations with friends.
						</p>
						<p>
							The technical implementation includes React Native for the
							frontend, Expo for cross-platform compatibility, Tesseract.js for
							OCR processing, and a structured data model for organizing menu
							items. This project showcases my ability to create practical
							mobile applications that solve real-world problems while
							delivering a polished user experience.
						</p>
						<p>
							You can download Foodie Folder from the App Store{" "}
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
							Hagglebot manages email conversations with multiple dealerships
							simultaneously, maintaining context across lengthy negotiations.
							It uses natural language processing to extract key information
							from dealer messages, such as price points, incentives, and
							special conditions, then formulates appropriate responses that
							advance the buyer's position.
						</p>
						<p>
							The technical implementation includes a containerized architecture
							with Docker, a React frontend for user interaction, a backend API
							for processing negotiations, and integration with email services.
							This project demonstrates my ability to create practical AI
							applications that solve real-world problems while delivering
							significant value to users through automation of complex social
							interactions.
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
							The technical implementation includes smart contracts for
							tokenization and ownership tracking, a React-based dashboard for
							investors, KYC verification systems, and automated rent
							distribution through both traditional financial rails and
							cryptocurrency payments. This project demonstrates my ability to
							bridge traditional finance with blockchain technology to create
							innovative investment opportunities.
						</p>
						<p>
							You can browse the Rentinity project repository{" "}
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
							The technical implementation uses Python with Pygame for the
							interface, NumPy for signal processing, and sounddevice/aubio
							libraries for note detection. The architecture is simple and
							extensible, allowing for easy addition of new modes and drills.
							This project demonstrates my ability to combine audio processing,
							real-time feedback systems, and game design to create an
							educational tool that makes learning more engaging and effective.
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
							I developed <strong>Toy Contractor</strong>, a self-contained
							experimental platform that generates and revises legal contracts
							from natural language inputs. The system leverages a Mistral LLM
							to interpret user requirements and transform them into properly
							formatted legal documents, while also providing capabilities to
							revise existing contracts or other documents.
						</p>
						<p>
							The architecture consists of a lightweight backend API that
							handles document processing and storage, a client interface for
							user interactions, and integration with the Mistral large language
							model for text generation and analysis. The system maintains a
							complete revision history of all documents, allowing users to
							track changes and evolution of their contracts over time.
						</p>
						<p>
							The entire solution is containerized using Docker and orchestrated
							with Docker Compose, making it easy to deploy and scale. This
							project demonstrates my ability to integrate AI language models
							with practical applications, create maintainable microservice
							architectures, and develop solutions that bridge the gap between
							natural language processing and specialized domain knowledge like
							legal documentation.
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
