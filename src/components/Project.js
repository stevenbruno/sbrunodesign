import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Project(props) {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-red-200 w-10/12 mx-auto mb-8 rounded-lg">
      <StaticImage src={"../images/cat.png"} />
    </div>
  );
}
