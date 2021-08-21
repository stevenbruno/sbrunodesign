import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const IndexPage = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("sbruno636@gmail.com");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1600);
  };
  return (
    <>
      <StaticImage
        src="../images/bluecurve2.svg"
        alt="wavy blue background"
        className="-z-10 h-supertall"
        style={{ position: "absolute" }}
        placeholder="blurred"
      />
      <div className="p-6 sm:p-10 sm:text-lg text-gray-600">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Steven Bruno</title>
          <link rel="canonical" href="https:stevenbruno.design" />
          <html
            lang="en"
            className="bg-gradient-to-b from-white via-white to-blue-50"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <header className="flex flex-col items-center mb-48 pt-24 lg:pr-16">
          <h1 className="text-5xl sm:text-sbxl font-serif mb-4 text-gray-700 text-center font-semibold">
            Steven Bruno
          </h1>
          <p className="mb-24 text-center max-w-xs tracking-wide px-4 sm:max-w-none">
            Steven is a{" "}
            <span className="font-semibold text-gray-600">
              product designer
            </span>{" "}
            at Toast in New York City
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mx-auto">
            <div className="flex space-x-3 text-gray-400 text-sm md:text-xs text-center max-w-max">
              <a href="https://www.linkedin.com/in/stevenjbruno/">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a href="https://dev.to/stevenbruno">
                <FontAwesomeIcon icon={faDev} size="3x" />
              </a>
              <a href="https://github.com/stevenbruno">
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="mb-2 bg-emailbg text-emailblue hover:text-blue-900 active:bg-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                onClick={handleClick}
              >
                sbruno636@gmail.com <FontAwesomeIcon icon={faCopy} />
              </button>
              <p className={`text-sm ${clicked ? "visible" : "invisible"}`}>
                &#10004; Copied to clipboard
              </p>
            </div>
          </div>
        </header>
        <div className="flex flex-wrap max-w-4xl mx-auto sm:items-start md:items-center gap-16 lg:gap-24 mb-40 md:mb-56">
          <a href="https://stevenbruno.notion.site/Payroll-Redesign-8dca753b8ac24311baa079ace9a35e15">
            <div
              className={
                "py-16 px-2 min-h-72 min-w-72 max-w-xs sm:max-w-none sm:w-96 sm:h-96 rounded-lg bg-gradient-to-r from-yellow-50 to-yellow-100"
              }
            >
              <StaticImage
                src="../images/payrolldash.png"
                alt="Payroll Dashboard Mockup"
                placeholder="blurred"
              />
            </div>
          </a>
          <a href="https://stevenbruno.notion.site/MyToast-24edb88d60264f21a54063c2899ea3fa">
            <div
              className={
                "min-h-72 min-w-72 max-w-xs sm:max-w-none sm:w-96 sm:h-96 rounded-lg bg-gradient-to-r from-purple-50 to-pink-100"
              }
            >
              {/* <StaticImage
                  src="../images/payrolldash.png"
                  alt="MyToast App Mockup"
                  placeholder="blurred"
                /> */}
            </div>
          </a>
          <a href="https://stevenbruno.notion.site/Toast-Tips-Manager-3336ba38ec2e4baf82ba7677b1d13bad">
            <div
              className={
                "min-h-72 min-w-72 max-w-xs sm:max-w-none sm:w-96 sm:h-96 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-200"
              }
            >
              {/* <StaticImage
                  src="../images/payrolldash.png"
                  alt="Tips Manager Mockup"
                  placeholder="blurred"
                /> */}
            </div>
          </a>
        </div>
        <div className="mx-auto max-w-screen-sm">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">About me</h2>
          <p className="mb-4">
            I grew up in Los Angeles then moved to Chicago to study Civil
            Engineering and Architectural Design at{" "}
            <span className="font-semibold text-gray-700">
              Northwestern University
            </span>
            . My grand visions of becoming an architect took a backseat once I
            discovered web design. The ability to imagine and build your vision
            in three days as opposed to three years was too enticing to ignore.
          </p>
          <p className="mb-4">
            Once I completed my undergraduate degree, I landed a Junior UX
            Designer position at a startup called Stratex. There, I designed HR
            and payroll software. Toast acquired Stratex in 2019 and I have been
            designing software for restaurants ever since.
          </p>
          <p className="mb-4">
            I’m a{" "}
            <span className="font-semibold text-gray-700">UX generalist</span>{" "}
            comfortable working across the design ecosystem. I am equally at
            home leading research initiatives and facilitating design workshops
            as I am building prototypes and committing production front-end
            code.
          </p>
          <p className="mb-24">
            In my free time, I enjoy running, reading, soccer, chess, and trying
            new restaurants. Lately, I’ve been diving deep into climate and
            crypto.
          </p>
          <p className="mb-1 text-gray-400 italic">
            I designed and developed this website with Figma, React, Gatsby, and
            TailwindCSS. Let me know if you find any bugs or have general
            feedback. <span className="not-italic">&#128578;</span>
          </p>
          <p className="mb-4 text-gray-400 italic">sbruno636@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
