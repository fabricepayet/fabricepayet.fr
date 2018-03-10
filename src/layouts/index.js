import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fabrice Payet: Freelance Full Stack Developer"
      meta={[
        {
          name: 'description',
          content:
            "Fabrice Payet est développeur depuis une dizaine d'années. Il a travaillé avec de nombreuses startup dans la validation et conception de leur produit.",
        },
        {
          name: 'keywords',
          content:
            'fabrice, payet, développeur, freelance, réunion, javascript, application, mobile, web, meteorjs',
        },
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
