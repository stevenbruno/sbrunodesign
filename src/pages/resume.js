import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      <main className="flex flex-col max-w-max mx-auto pt-8 px-4">
        <a
          className="mb-8 max-w-max bg-emailbg text-emailblue hover:text-blue-900 active:bg-blue-300 px-4 py-2 rounded-full text-sm font-medium"
          href="https://stevenbruno.design"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
          <span>Return home</span>
        </a>
        <StaticImage
          src="../images/StevenBruno_Resume.jpg"
          alt="Resume, please email if visually impaired"
          placeholder="blurred"
          className="max-w-screen-lg min-w-min shadow-md rounded-md mb-16"
        />
      </main>
    </div>
  );
};
export default AboutPage;
