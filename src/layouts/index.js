import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import $ from "jquery";

import Header from '../components/Header'
import Footer from '../components/Footer'
// import './index.css'

const MainContainer = styled.div`
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
          title="Développeur d'application Web et Mobile en Freelance à la Réunion"
          meta={[
            {
              name: 'description',
              content:
                'Fabrice Payet est développeur Freelance spécialisé dans la création d\'application Web & Mobile. Il peut vous aider dans la création de votre produit. Ses technos préférés sont React, Meteorjs, Ionic, Nodejs.',
            },
            {
              name: 'keywords',
              content:
                'fabrice, payet, développeur, freelance, réunion, react, application, mobile, web, meteorjs, startup, fullstack',
            },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Inconsolata" rel="stylesheet" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
            crossorigin="anonymous"
          />
        </Helmet>
        <MainContainer data={this.props.data}>{this.props.children()}</MainContainer>
        <Footer data={this.props.data} />
      </div >
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
query LayoutQuery {
  bgFooter: imageSharp(id: {regex: "/bg-footer.jpg/"}) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }
}
`

export default TemplateWrapper
