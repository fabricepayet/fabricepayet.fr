import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import $ from "jquery";

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const MainContainer = styled.div`
  padding-top: 24px;
  background-color: white;
`

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Open mobile menu
    $('.menu__mobile-button, .mobile-menu__close').on('click', function () {
      $('.mobile-menu').toggleClass('active');
    });

    //Close mobile menu after click
    $('.mobile-menu__wrapper ul li a').on('click', function () {
      $('.mobile-menu').removeClass('active');
    });

    function fixedHeader() {
      var ww = $(window).scrollTop();
      if (ww > 0) {
        $('.menu').addClass('menu--active');
        $('.mobile-menu').addClass('mobile-menu--active');
      } else {
        $('.menu').removeClass('menu--active');
        $('.mobile-menu').removeClass('mobile-menu--active');
      }
    }
    fixedHeader();
    $(window).on('scroll', function () {
      fixedHeader();
    });
  }

  render() {
    return (
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
        >
          <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Inconsolata" rel="stylesheet" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
            crossorigin="anonymous"
          />
          <link href="/styles/custom.css" rel="stylesheet" />
        </Helmet>
        <Header />
        <MainContainer>{this.props.children()}</MainContainer>
        <Footer />
      </div >
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
