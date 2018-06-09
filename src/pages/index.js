import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import jump from 'jump.js';

import eloleoImage from '../images/eloleo.png';
import shillerzImage from '../images/shillerz.png';
import mimopopImage from '../images/mimopop.png';

import Resume from '../components/Resume'
import ProjectItem from '../components/ProjectItem';

const About = styled.div`
  a {
    text-decoration: none;
  }
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 1140px;
  padding: 60px 0;

  @media screen and (max-width: 1188px) {
    padding: 24px;
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  font-weight: normal;
`

const projects = [
  {
    name: 'Mimopop',
    image: mimopopImage,
    description: "Inspiré de la méthodologie Lean Startup, Mimopop vous permet de faire des études de marché de façon agile. Créer un questionnaire et profitez de l'intelligence collective pour amener votre projet vers le succès.",
    tags: ['MeteorJs', 'React', 'Sass', 'Questionnaire', 'Lean Startup', 'Interview'],
    link: 'http://www.mimopop.com/',
  },
  {
    name: 'Shillerz',
    image: shillerzImage,
    description: 'Shillerz est le réseau social pour les amateurs de crypto monnaies, vous pouvez y partager vos prédictions du marché et suivre des influenceurs. J\'ai travaillé avec l\'équipe sur le paiement en crypto monnaie pour l\'achat de Shillcoins.',
    tags: ['MeteorJs', 'React', 'Sass', 'Crypto', 'Coin'],
    link: 'https://www.shillerz.com/',
  },
  {
    name: 'Eloleo',
    image: eloleoImage,
    description: "Eloleo vous offre le terroir directement dans votre poche, vous y trouverez tous vos fruits & légumes préférés produits par des producteurs de proximité. J'ai aidé l'équipe d'Eloléo dans le développement de l'application mobile.",
    tags: ['MeteorJs', 'Ionic', 'Mobile', 'Géoloc', 'Terroir'],
    link: 'http://eloleo.fr/',
  },
]

const IndexPage = () => (
  <div>
    <InnerContainer>
      <About id="about">
        <SectionTitle>Bonjour,</SectionTitle>
        <p style={{ lineHeight: '30px' }}>
          Je suis <Link to="/">Fabrice Payet</Link>,{' '}
          <strong>développeur full stack</strong> passionné et vivant
          actuellement à{' '}
          <a href="https://www.iledelareunion.net/" target="_blank">
            la Réunion
          </a>. Durant <Link to="#resume" onClick={(e) => { e.preventDefault(); jump('#resume') }}>mon parcours professionnel</Link>,
          j'ai travaillé avec de nombreuses startups dans la création et la
          validation de leurs produits. Je sais aussi encadrer une équipe et
          organiser des cycles de développement en tant que{' '}
          <strong>Scrum Master / Chef de projet</strong>.
        </p>
        Mes technos préférés sont:{' '}
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
          Actuellement en <a href="https://www.malt.fr/profile/fabricepayet" target="_blank">freelance</a>, je propose mes services pour{' '}
          <strong>la création d'application web & mobile</strong>, je suis
          disponible et à l'écoute de vos besoins, vous pouvez{' '}
          <Link to="/contact">me contacter</Link> pour en discuter.
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
          ou simplement <Link to="/contact">me contacter</Link>.
        </p>
      </About>
    </InnerContainer>
    <hr />
    <InnerContainer>
      <Resume />
    </InnerContainer>

    <InnerContainer id="projects">
      <SectionTitle>Mes projets récents</SectionTitle>
      {projects.map(project => <ProjectItem key={project.name} name={project.name} image={project.image} description={project.description} tags={project.tags} link={project.link} />)}
    </InnerContainer>
  </div>
)

export default IndexPage
