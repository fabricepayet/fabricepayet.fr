import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import $ from 'jquery';

import Header from '../components/Header'
import Footer from '../components/Footer'

import favicon from '../images/favicon.png';
// import './index.css'

const MainContainer = styled.div`
  background-color: white;
`

const Layout = styled.div`
  .menu.menu--active {
    background-color: #fff;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .14);
    z-index: 200;
  }

  .menu.menu--active a {
    color: #555;
  }

  .menu.menu--active .menu__wrapper,
  .menu.menu--active .menu__mobile {
    margin-top: 25px;
    z-index: 9999;
    position: relative;
    width: 100%;
    z-index: 170;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-menu.active {
    height: 100%;
    width: 100%;
    top: 0;
    opacity: 1;
  }

  .mobile-menu .mobile-menu__wrapper {
    height: 100%;
    overflow: auto;
    font-size: 14px;
    line-height: 20px;
    font-family: Roboto Mono,monospace;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 60px;
  }

  .mobile-menu .mobile-menu__close {
    color: #fff;
    transition: all .3s;
    position: absolute;
    top: 50px;
    background-color: transparent;
    border: none;
    left: 24px;
    cursor: pointer;
  }

  .mobile-menu.mobile-menu--active .mobile-menu__close {
    top: 25px!important;
  }

  .mobile-menu .mobile-menu__wrapper ul {
    padding: 30px 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-height: 100%;
  }

  .mobile-menu .mobile-menu__wrapper ul li {
    list-style: none;
    padding: 6px 0;
  }

  .mobile-menu .mobile-menu__wrapper ul li a {
    color: #fff;
    display: inline-block;
    padding: 11px;
    position: relative;
  }

  .menu__mobile-button {
    cursor: pointer;
  }

  @media screen and (max-width: 1188px) {
    .mobile-menu {
      display: block;
    }
  }

  .menu.menu--active button {
    color: #555;
  }

  a {
    transition: all .3s;
    position: relative;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    color: #6d56c1;
  }
`;

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
      <Layout>
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
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        <MainContainer data={this.props.data}>{this.props.children()}</MainContainer>
        <Footer data={this.props.data} />
      </Layout>
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
