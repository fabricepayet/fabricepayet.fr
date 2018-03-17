import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;

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
          <strong>développeur full stack & Scrum master</strong>. Durant les
          dernières années, j'ai pu travailler avec de nombreuses startups dans
          la création et la validation de leurs produits. Actuellement
          indépendant, je propose mes services de développement pour la{' '}
          <strong>création d'applications web et mobile</strong>.
        </p>
      </ResumeContainer>
    </InnerContainer>
  </div>
)

export default IndexPage
