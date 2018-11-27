module.exports = {
    siteMetadata: {
        siteUrl: `https://fabricepayet.fr`,
        title: 'Fabrice Payet - Développeur Indépendant à la Réunion',
        headerTitle: 'Développeur Indépendant à la Réunion',
        desc: `Développeur Freelance à la Réunion, Fabrice Payet est spécialisé dans la création d\'application Web & Mobile. Développement FullStack Javascript | Méthodologie Agile | Lean Startup | Conseil`,
        description: `Développeur Freelance à la Réunion, Fabrice Payet est spécialisé dans la création d\'application Web & Mobile. Développement FullStack Javascript | Méthodologie Agile | Lean Startup | Conseil`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-robots-txt',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-feed`
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                exclude: ['https://fabricepayet.fr/success/'],
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
