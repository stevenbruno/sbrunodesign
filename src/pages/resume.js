import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      <main className="flex flex-col max-w-max mx-auto pt-8 px-4">
        <StaticImage
          src="../images/StevenBruno_Resume.png"
          alt="Resume, please email if visually impaired"
          placeholder="blurred"
          className="max-w-screen-lg min-w-min shadow-md rounded-md mb-16"
        />
      </main>
    </div>
  );
};
export default AboutPage;
