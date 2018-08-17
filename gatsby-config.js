module.exports = {
  siteMetadata: {
    siteUrl: `https://fabricepayet.fr`,
    title: 'Développeur Javascript Freelance à la Réunion',
    desc: 'Fabrice Payet est développeur Javascript actuellement en freelance. Il aide les startups et porteurs de projets dans la création de leur application web ou mobile.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/success/'],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-46294114-3',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
