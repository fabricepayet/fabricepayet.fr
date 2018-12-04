import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import jump from 'jump.js';

import eloleoImage from '../images/eloleo.png';
import shillerzImage from '../images/shillerz.png';
import mimopopImage from '../images/mimopop.png';

import Resume from '../components/Resume'
import ProjectItem from '../components/ProjectItem';
import Article from '../components/Article';
import Header from '../components/Header';

const ArticleListing = styled.div`
  display: flex;
  padding: 24px 0;

  @media screen and (max-width: 800px) {
    display: block;
  }
`

const About = styled.div`
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 1140px;
  padding: 48px 0;

  @media screen and (max-width: 1188px) {
    padding: 24px;
  }
`

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  font-weight: normal;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`

const Hello = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  font-weight: normal;

  @media screen and (max-width: 800px) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`

const projects = [
  {
    name: 'Mimopop',
    image: mimopopImage,
    description: "Inspiré de la méthodologie Lean Startup, Mimopop vous propose de faire des études de marché de façon agile. Créer un questionnaire et profitez de l'intelligence collective pour mener votre projet au succès.",
    tags: ['MeteorJs', 'React', 'Sass', 'Questionnaire', 'Lean Startup', 'Interview', 'Feedback', 'Intelligence Collective'],
    link: 'http://www.mimopop.com/',
  },
  {
    name: 'Shillerz',
    image: shillerzImage,
    description: 'Shillerz est le réseau social pour les amateurs de crypto monnaies, vous pouvez y partager vos prédictions du marché et suivre des influenceurs. J\'ai travaillé avec l\'équipe sur le paiement en crypto monnaie pour l\'achat de Shillcoins.',
    tags: ['MeteorJs', 'React', 'Sass', 'Crypto', 'Coin', 'Bitcoin', 'Trading', 'Spéculation', 'Signal'],
    link: 'https://www.shillerz.com/',
  },
  {
    name: 'Eloleo',
    image: eloleoImage,
    description: "Eloleo vous offre le terroir directement dans votre poche, vous y trouverez tous vos fruits & légumes préférés produits par des producteurs de proximité. J'ai aidé l'équipe d'Eloléo dans le développement de l'application mobile.",
    tags: ['MeteorJs', 'Ionic', 'Mobile', 'Géoloc', 'Local', 'Fruits', 'Légumes', 'Bio', 'Agriculture'],
    link: 'http://eloleo.fr/',
  },
]

const IndexPage = ({ data }) => (
  <div>
    <Header data={data} />
    <InnerContainer id="about">
      <About>
        <Hello>Bonjour,</Hello>
        <p style={{ lineHeight: '30px' }}>
          Je suis <Link to="/">Fabrice Payet</Link>, je suis{' '}
          <strong>développeur Full Stack</strong> et j'habite actuellement à{' '}
          <a href="https://www.iledelareunion.net/" target="_blank">
            la Réunion
          </a> 🌴. Durant ces dernières années, j'ai pu accompagner plusieurs entreprises et porteurs de projet dans la création de leur produit. En tant que prestataire technique, je m'assure des bons choix techniques, de la conception, du développement et de la mise en production. Je sais aussi encadrer une équipe et organiser des cycles de développement en suivant les méthodologies agiles.
        </p>
        Mes technos préférées sont:{' '}
        <a href="https://www.meteor.com/" target="_blank">
          MeteorJS
        </a>,{' '}
        <a href="https://facebook.github.io/react-native/" target="_blank">
          React Native
        </a>{' '}
        et{' '}
        <a href="https://graphql.org/" target="_blank">
          GraphQL
        </a>.
        <p />
        <p>
          Je travaille actuellement en <a href="https://www.malt.fr/profile/fabricepayet" target="_blank">Freelance</a>, je propose mes services pour le développement d'{' '}
          <strong>Application Web & Mobile</strong>, je suis
          disponible et à l'écoute de vos besoins, vous pouvez{' '}
          <Link to="/contact" onClick={(e) => { e.preventDefault(); jump('#contact') }}>me contacter</Link> pour en discuter.
        </p>
        <p>
          Vous pouvez{' '}
          <a
            href="https://www.linkedin.com/in/fabricepayetpro/"
            target="_blank"
          >
            rejoindre mon réseau
          </a>,{' '}
          <a href="https://github.com/fpayet" target="_blank">
            voir mon code
          </a>{' '}
          ou simplement <Link to="/contact" onClick={(e) => { e.preventDefault(); jump('#contact') }}>me contacter</Link>.
        </p>
      </About>
    </InnerContainer>
    <hr />
    <InnerContainer id="resume">
      <SectionTitle>Mon parcours professionnel</SectionTitle>
      <Resume />
    </InnerContainer>

    <hr />

    <InnerContainer id="projects">
      <SectionTitle>Mes projets récents</SectionTitle>
      {projects.map(project => <ProjectItem key={project.name} name={project.name} image={project.image} description={project.description} tags={project.tags} link={project.link} />)}
    </InnerContainer>

    <hr />

    <InnerContainer id="blog">
      <SectionTitle>Mes derniers articles</SectionTitle>
      <ArticleListing>
        {data.allMarkdownRemark.edges.map(({ node }) => (<Article article={node} key={node.id} />))}
      </ArticleListing>
    </InnerContainer>
  </div>
)

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            cover
          }
          excerpt(pruneLength: 180)
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    bgHeader: imageSharp(id: {regex: "/bg-header.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    profile: imageSharp(id: {regex: "/photo.jpg/"}) {
      sizes(maxWidth: 270) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default IndexPage
