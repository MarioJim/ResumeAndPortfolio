require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Mario Jiménez',
    description: "MarioJim's portfolio",
    author: 'MarioJim',
    siteUrl: 'https://mariojim.github.io/',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GRAPHQL_GITHUB_KEY}`,
        },
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Inter:400,500,600'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mario Jiménez',
        short_name: 'MarioJim',
        start_url: '/',
        background_color: '#152238',
        theme_color: '#152238',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-no-javascript',
  ],
};
