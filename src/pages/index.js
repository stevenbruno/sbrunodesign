import * as React from "react";
import { Helmet } from "react-helmet";
import Project from "../components/Project.js";

const IndexPage = () => {
  return (
    <div className="pt-4 text-gray-600">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Steven Bruno</title>
        <link rel="canonical" href="https:stevenbruno.design" />
        <html lang="en" />
      </Helmet>
      <nav className="px-4 mb-20 flex flex-col text-center">
        <p className="text-xl font-serif tracking-wide">Steven Bruno</p>
        <p className="text-sm uppercase">sbruno636@gmail.com</p>
        <p>social links</p>
      </nav>
      <main className="px-4">
        <h1 className="text-4xl font-light font-serif mb-4">Hi, I'm Steven</h1>
        <p className="mb-40">
          I'm a product designer based in New York City. Currently, I'm
          designing technology for restaurants at Toast.
        </p>
        <Project />
      </main>
    </div>
  );
};

export default IndexPage;
