import { navMap } from "./NavMap.tsx";

export function BigWheel() {
  const navData = navMap["big_wheel"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>{navData.text}</h2>
          <p>
            Building and taking a mutant vehicle to Burning Man in 2015 was an
            experience of a lifetime. The vehicle, a whimsical fusion of a
            tricycle and a golf cart, stood tall at eight feet. It was a sight
            to behold, especially when it lit up the night with hundreds of
            lights, all controlled by two Arduino microcontrollers powered by
            onboard batteries. The construction of the vehicle was a feat of
            engineering and creativity. The base was a standard golf cart,
            chosen for its stability and ease of operation. On top of this, an
            eight-foot tall tricycle structure was built, transforming the
            ordinary golf cart into an extraordinary mutant vehicle. The
            handlebars, a massive 10 feet wide, were wrapped in lights, creating
            a dazzling display that could be seen from afar. Adding to the
            spectacle were fifty six-foot ribbon streamers attached to either
            handle, fluttering in the wind as the vehicle moved, creating a
            beautiful, flowing light show. The mutant vehicle was not just a
            means of transportation, but a moving piece of art, embodying the
            spirit of self-expression and creativity that is at the heart of
            Burning Man. It was a testament to the power of imagination and the
            joy of bringing a vision to life. And as it moved through the playa,
            it brought smiles to the faces of everyone who saw it, lighting up
            the night and the hearts of the Burning Man community.
          </p>
        </div>
      </a>
    </span>
  );
}

export function FireTable() {
  const navData = navMap["fire_table"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <p>
            I successfully designed and created an interactive fire installation
            art project, titled "Fire in Earth". This project was placed on
            playa in 2015.
          </p>
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
            testament to their creativity, technical skills, and their ability
            to create engaging and interactive art installations.
          </p>
          <video controls autoPlay loop muted>
            <source src={myVideo} type="video/mp4"></source>
          </video>
        </div>
      </a>
    </span>
  );
}

export function CV() {
  const navData = navMap["cv"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
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
          <a href="https://pixelstub.com/">
            Also available in interactive sphinx format
          </a>
          , really though, this is the least interesting page on the site.
        </div>
      </a>
    </span>
  );
}

export function Quadricycle() {
  const navData = navMap["quadricycle"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>{navData.text}</h2>
          <div>
            <img src={quadLit} alt="Quadricycle" />
            In a remarkable display of engineering and creativity, I designed
            and constructed a two-bicycle, serial tandem bicycle, also known as
            a quadricycle. This unique project showcased the candidate’s
            problem-solving skills, hands-on fabrication abilities, and passion
            for cycling. The quadricycle was built with a sturdy yet lightweight
            frame, using materials such as steel or aluminum. The design ensured
            stability, even on sandy terrains, preventing the quadricycle from
            falling over. A self-centering mechanism was ingeniously
            incorporated into the steering system, enhancing maneuverability and
            control. The candidate thoughtfully added a trunk for storage,
            demonstrating their attention to practicality and user experience. A
            shaded parasol was mounted on aluminum struts, providing comfort for
            the riders under the sun. In a fusion of technology and art, the
            quadricycle was adorned with hundreds of lights, creating a dazzling
            display that added to the joy of riding it. The candidate’s ability
            to integrate electronic components into the design highlighted their
            multidisciplinary skills. The successful completion of the
            quadricycle, followed by a successful test ride, stands as a
            testament to the candidate’s technical skills, creativity, and
            dedication to bringing a vision to life. This project is a notable
            accomplishment and a valuable addition to the candidate’s resume. It
            truly embodies the spirit of innovation and creativity.
          </div>
        </div>
      </a>
    </span>
  );
}

export function CleaningUp() {
  const navData = navMap["cleaning_up"];
  return (
    <span className="detailPage">
      <img src={navData.image} alt={navData.text} />
      <div className="content">
        <h2>{navData.text}</h2>
        <div>
          <p>
            The talk titled “Cleaning Up Your Python Environment” delivered by
            the author is a comprehensive guide on managing Python environments.
            The talk addresses the common challenges faced by developers in
            maintaining their Python environments, drawing a parallel with
            Randall Munroe’s (of XKCD fame) Python environment superfund site.
            Key points from the talk include: The importance of keeping a clean
            and organized Python environment. Practical tips and best practices
            for managing Python environments. Demonstrations of common pitfalls
            and how to avoid them. Use of various tools and techniques to
            streamline the process. This talk showcases the author’s deep
            understanding of Python, their ability to communicate complex
            concepts in an accessible manner, and their commitment to sharing
            knowledge with the community. It’s a testament to their expertise
            and their passion for continuous learning and improvement. This
            makes it a notable accomplishment to include on a resume.
          </p>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=cpseEHA_haA">
                Watch the presentation
              </a>
            </li>
            <li>
              <a href="https://github.com/ahonnecke/superfund-remediation">
                Included materials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </span>
  );
}

export function Consolo() {
  const navData = navMap["consolo"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>{navData.text}</h2>
          <div>
            <p>
              Consolo is a Free and Open Source Software (FOSS) utility that
              provides a solution for pseudo-mounting an AWS lambda filesystem
              locally. It supports hot reloading by default, enhancing the
              development experience. Key features of Consolo include: Hot
              Syncing: Consolo can start hot syncing with the AWS lambda
              filesystem. Upload and Download: It allows users to upload from
              local to cloud and download from cloud to local. Ease of
              Installation: Consolo can be installed via a single file curl
              command or pip install. The utility is built with Python and
              leverages several libraries such as argdantic, requests, watchdog,
              and boto3. It’s a testament to the author’s skills in Python
              programming, cloud computing, and software development. Pronounced
              'Con Solo', like 'Han Solo'. This playful touch shows the author’s
              creativity and sense of humor. This utility demonstrates the
              author’s ability to create practical and innovative solutions that
              streamline and enhance the development process. It’s a valuable
              addition to any software developer’s toolkit, and a notable
              accomplishment to include on a resume.
            </p>
          </div>
        </div>
      </a>
    </span>
  );
}

export function Snifter() {
  const navData = navMap["snifter"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>{navData.text}</h2>
          <div>
            <p>
              Snifter is a Free and Open Source Software (FOSS) utility that
              provides a solution for inspecting AWS Simple Notification Service
              (SNS) topic data. Because SNS data is ephemeral, Snifter creates a
              temporary SQS queue, subscribes the queue to the SNS topic you
              want to inspect, and then watches that queue. This is all done in
              a single command. Key features of Snifter include: Hot Syncing:
              Snifter can start hot syncing with the AWS SNS topic. Interactive
              Debugging: Providing the --debug flag will cause you to drop into
              a debugger when something is popped from the queue. Ease of Usage:
              Snifter can be used with a simple command line interface. The
              utility is built with Python, demonstrating the author’s skills in
              Python programming, cloud computing, and software development.
              This utility showcases the author’s ability to create practical
              solutions that enhance the development process. It’s a valuable
              addition to any software developer’s toolkit, and a notable
              accomplishment to include on a resume.
            </p>
          </div>
        </div>
      </a>
    </span>
  );
}

export function JollyBrancher() {
  const navData = navMap["jolly_brancher"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>{navData.text}</h2>
          <div>
            <p>
              Jolly-Brancher is a Free and Open Source Software (FOSS) utility
              designed to streamline the developer’s workflow by connecting an
              arbitrary ticketing system to a git forge. Key features of
              Jolly-Brancher include: Branch Creation: Given a repository
              location, Jolly-Brancher creates branches from JIRA tickets that
              automatically include ticket information in the branch and branch
              name. Pull Review Creation: It can create a pull review from an
              existing branch that is well formed. PR Description: It
              automatically populates the PR description with information from
              the ticket. Ease of Configuration: JIRA and git credentials are
              required in ~/.config/jolly_brancher.ini. Currently, only JIRA is
              supported for the ticketing system and only GitHub is supported
              for the git forge. The utility is built with Python, demonstrating
              the author’s skills in Python programming, cloud computing, and
              software development. This utility showcases the author’s ability
              to create practical solutions that enhance the development
              process. It’s a valuable addition to any software developer’s
              toolkit, and a notable accomplishment to include on a resume.
              Future features include extracting the contents of the comments in
              the branch and constructing a description of the changes in the
              branch, performing in-place analysis of the branch and adding
              information to the PR, and more.
            </p>
          </div>
        </div>
      </a>
    </span>
  );
}

export function Github() {
  const navData = navMap["github"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>Github</h2>
          <div>
            <p>
              A GitHub profile serves as a dynamic resume, showcasing their
              coding projects and contributions to the open-source community. It
              provides a real-time demonstration of the author’s coding skills,
              problem-solving abilities, and collaboration in team projects.
            </p>
            <p>Key features of the GitHub profile include:</p>
            <p>
              Repositories: The author’s repositories highlight the projects
              they have initiated or contributed to. Each repository includes
              source code, a README to explain the project, and a history of
              commits.
            </p>
            <p>
              Contributions: The contribution graph shows the author’s activity
              over time, demonstrating consistency and commitment to ongoing
              learning and improvement.
            </p>
            <p>
              Stars: The stars on a repository indicate its popularity within
              the GitHub community and can be seen as a form of peer
              recognition.
            </p>
            <p>
              Forks: Forks show how many other developers have found the
              author's work valuable and have built upon it.
            </p>
          </div>
        </div>
      </a>
    </span>
  );
}

export function Linting() {
  const navData = navMap["linting"];
  return (
    <span className="detailPage">
      <a href={navData.link}>
        <img src={navData.image} alt={navData.text} />
        <div className="content">
          <h2>{navData.text}</h2>
          <div>
            <p>
              I delivered a local talk on linting, which is now only{" "}
              <a href="https://github.com/ahonnecke/linting">
                hosted on GitHub
              </a>{" "}
              (the recoding was lost in the fervor of COVID). This talk, which I
              authored and, delved deep into the world of linting, a crucial
              aspect of programming that ensures code quality and readability.
              Linting, a type of static code analysis, checks code for potential
              errors, bugs, stylistic errors, and suspicious constructs. In this
              talk, I guided the audience through the importance of linting, how
              to set it up, and how to use it to improve code quality. The talk
              was beneficial for both seasoned developers and beginners in
              coding, offering valuable insights into the best practices of
              using linting tools in projects. This experience enhanced my
              coding skills and deepened my understanding of linting.
            </p>
          </div>
        </div>
      </a>
    </span>
  );
}
