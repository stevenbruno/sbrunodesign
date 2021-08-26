import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  ClipboardCopyIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { DownloadIcon } from "@heroicons/react/solid";
import { StaticImage } from "gatsby-plugin-image";
import { config } from "@fortawesome/fontawesome-svg-core";
import resume from "../images/StevenBruno_Resume_8:21.pdf";

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
      <div
        className="bg-gradient-to-b 
        from-babyblue w-screen h-supertall sm:h-4/5 absolute -z-10"
      ></div>
      <div className="sm:text-lg text-gray-600">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Steven Bruno</title>
          <link rel="canonical" href="https:stevenbruno.design" />
          <html lang="en" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;600;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Unna:ital,wght@1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:wght@600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <header className="flex flex-col items-start mb-24 md:mb-48 pt-24 lg:pr-12 pl-8 sm:pl-48 pb-16">
          <div className="text-6xl sm:text-sbxl mb-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 font-sans font-bold mb-2">
              Steven Bruno
            </p>
            <p className="mb-8 max-w-xs tracking-wide sm:max-w-none text-2xl text-gray-500">
              Product Designer at{" "}
              <a
                href="https://pos.toasttab.com/about"
                className="toast hover:text-toast"
              >
                Toast
              </a>{" "}
              <div className="inline-flex items-center gap-1">
                <span className="text-gray-400">
                  &nbsp;&nbsp;//&nbsp;&nbsp;
                </span>{" "}
                <LocationMarkerIcon className="h-5 w-5 inline" />
                NYC
              </div>
            </p>
          </div>

          <div className="flex flex-col mb-4 gap-6">
            <div className="flex flex-col items-start gap-2">
              <p
                className={`text-sm text-purple-700 ${
                  clicked ? "visible" : "invisible"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} className="text-purple-600" />{" "}
                Copied to clipboard
              </p>
              <button
                className="bg-emailbg text-emailblue hover:text-blue-900 active:bg-blue-300 px-2 pr-3 py-2 rounded-md text-sm font-medium"
                onClick={handleClick}
              >
                <ClipboardCopyIcon className="h-5 w-5 inline" />{" "}
                &nbsp;&nbsp;sbruno636@gmail.com
              </button>
            </div>
            <a
              className=" bg-emailbg max-w-max text-emailblue hover:text-blue-900 active:bg-blue-300 px-2 pr-3 py-2 rounded-md text-sm font-medium"
              href={resume}
              download="StevenBrunoResume"
            >
              <DownloadIcon className="h-5 w-5 inline" /> &nbsp;&nbsp;Download
              resume
            </a>
            <div className="flex space-x-3 text-gray-400 text-sm md:text-xs text-emailblue opacity-60 pb-1">
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
          </div>
        </header>
        <div className="flex flex-wrap max-w-full mx-auto gap-24 sm:gap-y-24 justify-center items-center mb-40 md:mb-56">
          <a
            href="https://stevenbruno.notion.site/Payroll-Redesign-8dca753b8ac24311baa079ace9a35e15"
            className="max-w-max"
          >
            <div className="w-11/12 max-w-lg mx-auto">
              <StaticImage
                src="../images/Payroll.png"
                alt="Payroll Dashboard Mockup"
                placeholder="blurred"
              />
            </div>
          </a>
          <a
            href="https://stevenbruno.notion.site/MyToast-24edb88d60264f21a54063c2899ea3fa"
            className="max-w-max"
          >
            <div className="w-11/12 max-w-lg mx-auto">
              <StaticImage
                src="../images/MyToast2.png"
                alt="MyToast App Mockup"
                placeholder="blurred"
              />
            </div>
          </a>
          <a
            href="https://stevenbruno.notion.site/Toast-Tips-Manager-3336ba38ec2e4baf82ba7677b1d13bad"
            className="max-w-max"
          >
            <div className="w-11/12 max-w-lg mx-auto">
              <StaticImage
                src="../images/Tips.png"
                alt="Tips Manager Mockup"
                placeholder="blurred"
              />
            </div>
          </a>
          <div className="hidden projwrap:block w-5/6 max-w-lg">
            {" "}
            <StaticImage
              src="../images/Spacer.png"
              alt="Blank space for layout"
              placeholder="none"
            />
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm px-4">
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-indigo-500 mb-8">
            About me
          </h2>
          <p className="mb-4">
            I grew up in Los Angeles then moved to Chicago to study Civil
            Engineering and Architectural Design at{" "}
            <b>Northwestern University</b>. My grand visions of becoming an
            architect took a backseat once I discovered web design in my
            computer science and HCI courses. The ability to imagine and
            construct a vision in three days instead of three years was too
            enticing to ignore.
          </p>
          <p className="mb-4">
            Once I completed my undergraduate degree, I began working as a
            Junior UX Designer at a startup called Stratex. There, I designed HR
            and payroll software. Toast acquired Stratex in 2019 and I have been
            designing software for restaurants ever since.
          </p>
          <p className="mb-4">
            I’m a <b>UX generalist</b> with diverse experience across the design
            ecosystem. I'm equally confident leading <b>research</b>{" "}
            initiatives, facilitating <b>design workshops</b>, building{" "}
            <b>prototypes</b>, contributing to <b>design systems</b>, and even
            committing production <b>front-end code</b>.
          </p>
          <p className="mb-20">
            In my free time, I enjoy running,{" "}
            <a
              href=" https://www.goodreads.com/stevenbruno "
              className="underline"
            >
              reading
            </a>
            , soccer, chess, and trying new restaurants. Recently, I've been
            diving deep into climate and crypto.
          </p>
          <p className="mb-8 text-gray-400 italic">
            I designed and developed this website with Figma, React, Gatsby, and
            TailwindCSS. Let me know if you find any bugs. :)
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
