import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ResumeContainer = styled.div`
  a {
    text-decoration: none;
  }
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const IndexPage = () => (
  <div>
    <InnerContainer>
      <ResumeContainer>
        <p>
          Je suis <Link to="/">Fabrice Payet</Link>,{' '}
          <strong>développeur full stack</strong> passionné et vivant
          actuellement à{' '}
          <a href="https://www.iledelareunion.net/" target="_blank">
            la Réunion
          </a>. Durant <Link to="/resume/">mon parcours professionel</Link>,
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
          Actuellement indépendant, je propose mes services pour{' '}
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
      </ResumeContainer>
    </InnerContainer>
  </div>
)

export default IndexPage
