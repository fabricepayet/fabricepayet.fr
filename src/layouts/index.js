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
      title="Fabrice Payet: Freelance Full Stack Developer"
      meta={[
        {
          name: 'description',
          content:
            'Fabrice Payet est développeur freelance et indépendant basé a la Réunion. Spécialiste des applications web & mobile, il a travaillé avec plusieurs startups à la Réunion.',
        },
        {
          name: 'keywords',
          content:
            'fabrice, payet, développeur, freelance, réunion, javascript, application, mobile, web, meteorjs, startup',
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
