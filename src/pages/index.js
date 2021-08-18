import * as React from "react";
import { Helmet } from "react-helmet";
// import Project from "../components/Project.js";
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
    color: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    name: "Simplified Payroll",
    description: "lorem ipsum",
    projURL:
      "https://stevenbruno.notion.site/Payroll-Redesign-8dca753b8ac24311baa079ace9a35e15",
    // imgSrc:
    //   "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg",
    imgAlt: "Payroll web app screen",
    color: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    name: "Toast Tips Manager",
    description: "lorem ipsum",
    projURL:
      "https://stevenbruno.notion.site/Toast-Tips-Manager-3336ba38ec2e4baf82ba7677b1d13bad",
    // imgSrc: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
    imgAlt: "Tips Manager screen",
    color: "bg-gradient-to-r from-green-400 to-blue-500",
  },
];

const IndexPage = () => {
  return (
    <div className="p-6 sm:p-10 text-gray-500">
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
      <nav className="mb-20 lg:mb-32 flex flex-wrap border-b-2 border-gray-300 pb-4 justify-between items-center space-y-1">
        <div className="flex flex-col mb-2">
          <p className="text-2xl font-serif font-semibold tracking-wide text-gray-600">
            Steven Bruno
          </p>
          <p className="text-sm uppercase">sbruno636@gmail.com</p>
        </div>
        <div className="flex space-x-3 text-gray-400 text-sm md:text-xs">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <FontAwesomeIcon icon={faDev} size="3x" />
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </div>
      </nav>
      <div className="mx-auto max-w-screen-lg lg:pl-8">
        <main>
          <h1 className="text-5xl sm:text-7xl font-serif font-light mb-4 text-gray-800">
            This site is under construction
          </h1>
          <p className="mb-40 leading-relaxed max-w-xl">
            I'm a product designer based in New York City. Currently, I'm
            designing technology for restaurants at Toast.
          </p>
        </main>
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
    </div>
  );
};

export default IndexPage;
