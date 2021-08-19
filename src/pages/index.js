import * as React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    name: "MyToast",
    description: "lorem ipsum",
    projURL:
      "https://stevenbruno.notion.site/MyToast-24edb88d60264f21a54063c2899ea3fa",
    // imgSrc: "https://placekitten.com/800/600",
    imgAlt: "MyToast app screen",
    color: "bg-gradient-to-r from-yellow-100 to-red-200",
  },
  {
    name: "Simplified Payroll",
    description: "lorem ipsum",
    projURL:
      "https://stevenbruno.notion.site/Payroll-Redesign-8dca753b8ac24311baa079ace9a35e15",
    // imgSrc:
    //   "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg",
    imgAlt: "Payroll web app screen",
    color: "bg-gradient-to-r from-purple-200 via-pink-200 to-red-200",
  },
  {
    name: "Toast Tips Manager",
    description: "lorem ipsum",
    projURL:
      "https://stevenbruno.notion.site/Toast-Tips-Manager-3336ba38ec2e4baf82ba7677b1d13bad",
    // imgSrc: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
    imgAlt: "Tips Manager screen",
    color: "bg-gradient-to-r from-blue-100 to-indigo-200",
  },
];

const IndexPage = () => {
  return (
    <div className="p-6 sm:p-10 text-gray-600 text-lg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Steven Bruno</title>
        <link rel="canonical" href="https:stevenbruno.design" />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <nav className="mb-20 lg:mb-32 flex flex-wrap border-b-2 border-gray-300 pb-4 justify-between items-center gap-x-6 space-y-1">
        <div className="flex flex-col mb-2">
          <p className="text-2xl font-serif uppercase text-gray-600">
            Steven Bruno
          </p>
          <p className="text-sm font-serif tracking-wider uppercase">
            sbruno636@gmail.com
          </p>
        </div>
        <div className="flex space-x-3 text-gray-400 text-sm md:text-xs">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <FontAwesomeIcon icon={faDev} size="3x" />
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </div>
      </nav>
      <div className="mx-auto max-w-screen-lg lg:pl-8 mb-24">
        <h1 className="text-5xl sm:text-7xl font-serif font-light mb-4 text-gray-800">
          This site is under construction
        </h1>
        <p className="mb-40 leading-relaxed max-w-xl">
          I'm a product designer based in New York City. Currently, I'm
          designing technology for restaurants at Toast.
        </p>
        <div className="flex flex-wrap justify-start sm:justify-start gap-16 lg:gap-24">
          {projects.map((proj) => {
            return (
              <a className="" href={proj.projURL}>
                <div
                  className={
                    "min-h-72 min-w-72 max-w-xs sm:max-w-none sm:w-96 sm:h-96 rounded-lg " +
                    proj.color
                  }
                >
                  <img src={proj.imgSrc} alt={proj.imgAlt} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm">
        <h2 className="text-4xl font-serif text-gray-900 mb-4">About me</h2>
        <p className="mb-4">
          I grew up in Los Angeles then moved to Chicago to study Civil
          Engineering and Architectural Design at Northwestern University. My
          grand visions of becoming an architect took a backseat once I
          discovered web design. The ability to imagine and build your vision in
          three days as opposed to three years was too enticing to ignore.
        </p>
        <p className="mb-4">
          Once I completed my undergraduate degree, I landed a Junior UX
          Designer position at a startup called Stratex. There, I designed HR
          and payroll software. Toast acquired Stratex in 2019 and I have been
          designing software for restaurants ever since.
        </p>
        <p className="mb-4">
          I’m a UX generalist comfortable working across the design ecosystem. I
          am equally at home leading research initiatives and facilitating
          design workshops as I am building prototypes and committing production
          front-end code.
        </p>
        <p className="mb-4">
          In my free time, I enjoy running, reading, soccer, chess, and trying
          new restaurants. Lately, I’ve been diving deep into climate and
          crypto.
        </p>
        <p className="mb-4">
          I designed and built this website with Figma, React, Gatsby, and
          TailwindCSS.
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
