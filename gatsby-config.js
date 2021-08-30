module.exports = {
  siteMetadata: {
    siteUrl: "https://www.stevenbruno.design",
    title: "Steven Bruno",
    description: "Steven Bruno Design Portfolio",
    url: "https://www.stevenbruno.design", // No trailing slash allowed!
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      __key: "images",
    },
  ],
};
