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
    projURL: "",
    imgSrc: "https://placekitten.com/800/600",
    imgAlt: "kitten",
    color: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    name: "Toast Tips Manager",
    description: "lorem ipsum",
    projURL: "",
    imgSrc: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
    imgAlt: "dog",
    color: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    name: "Simplified Payroll",
    description: "lorem ipsum",
    projURL: "",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg",
    imgAlt: "cheetah",
    color: "bg-gradient-to-r from-green-400 to-blue-500",
  },
];

const IndexPage = () => {
  return (
    <div className="p-4 sm:p-10 text-gray-500">
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
      <nav className="mb-20 flex flex-wrap justify-between space-y-1">
        <div className="flex flex-col mb-2">
          <p className="text-2xl font-serif font-semibold tracking-wide text-gray-600">
            Steven Bruno
          </p>
          <p className="text-sm uppercase">sbruno636@gmail.com</p>
        </div>
        <div className="flex space-x-3 text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <FontAwesomeIcon icon={faDev} size="3x" />
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </div>
      </nav>
      <main>
        <h1 className="text-4xl font-serif mb-4 text-gray-600">
          Hi, I'm Steven
        </h1>
        <p className="mb-40 leading-relaxed max-w-xl">
          I'm a product designer based in New York City. Currently, I'm
          designing technology for restaurants at Toast.
        </p>
      </main>
      {projects.map((proj) => {
        return (
          <a href={proj.projURL}>
            <div
              className={"w-10/12 h-72 mx-auto mb-8 rounded-lg " + proj.color}
            >
              <img src={proj.imgSrc} alt={proj.imgAlt} />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default IndexPage;
