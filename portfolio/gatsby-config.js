module.exports = {
  siteMetadata: {
    title: `Mario Jiménez`,
    description: `MarioJim's portfolio`,
    author: `MarioJim`,
    siteUrl: `https://mariojim.github.io/`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mario Jiménez`,
        short_name: `MarioJim`,
        start_url: `/`,
        background_color: `#152238`,
        theme_color: `#152238`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}