import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const MainContainer = styled.div`
  padding-top: 104px;
  background-color: white;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fabrice Payet: Développeur Javascript en Freelance à la Réunion"
      meta={[
        {
          name: 'description',
          content:
            'Fabrice Payet est développeur Javascript actuellement en freelance. Il aide les startups et porteurs de projets dans la création de leur application web ou mobile.',
        },
        {
          name: 'keywords',
          content:
            'fabrice, payet, développeur, freelance, réunion, javascript, application, mobile, web, meteorjs, startup, fullstack',
        },
      ]}
    />
    <Header />
    <MainContainer>{children()}</MainContainer>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
