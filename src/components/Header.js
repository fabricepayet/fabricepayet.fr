import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import MenuLinks from './MenuLinks';
import Img from 'gatsby-image';
import $ from 'jquery';

const MainHeader = styled.div`
  border-bottom: 1px solid #ddd;
  background-image: url(${props => props.bgImage});
  background-color: #6d56c1;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  font-family: Roboto Mono,monospace;
  z-index: 150;
  margin-bottom: 24px;

  &:before {
    background: linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95));
    height: 100%;
    left: 0;
    right: 0;
    position: absolute;
    content: "";
    z-index: -5;
  }
  `

const InnerContainer = styled.div`
  max-width: 1140px;
  margin: auto;
`

const HeaderInner = styled.div`
  align-item: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row-reverse;
  max-width: 1140px;
  padding-top: 90px;
`

const ImageContainer = styled.div`
  flex: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`

const IdentityContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;

  .gatsby-image-outer-wrapper {
    margin-right: 50px;
    margin-bottom: 0;
    position: relative;
    top: 24px;
    width: 270px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 1188px) {
    justify-content: center;
    padding-top: 24px;
    display: block;
    text-align: center;
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;

    .gatsby-image-outer-wrapper {
      position: initial;
      z-index: 1000;
      margin-bottom: 24px;
      margin-right: 0px;
      width: 270px;
    }

    .gatsby-image-wrapper {
      bottom: 24px;
    }
  }
`

const MenuContainer = styled.div`
  z-index: 1;
  margin-top: 50px;
  transition: all .3s;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  display: block;

  a {
    color: white;
    margin-right: 50px;
    text-decoration: none !important;

    &:active,
    &:hover {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 1188px) {
    padding-left: 15px;
    display: none;
  }
`

const NavContainer = styled.div`
width: 100%;
position: fixed;
padding: 0;
top: 0;
z-index: 160;
width: 100%;
height: 70px;
transition: all .5s;
`

const MenuMobile = styled.div`
  z-index: 1;
  margin-top: 50px;
  transition: all .3s;
  padding: 0 15px;
  display: none;

  button {
    color: #fff;
    opacity: .5;
    transition: all .3s;
    background-color: transparent;
    border: none;
  }

  @media screen and (max-width: 1188px) {
    display: block;
  }
`

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  text-align: center;
  z-index: 9999;
  transition: all .3s ease;
  padding: 0;
  background-color: rgba(0,0,0,.8);
  opacity: 0;
`

const NameContainer = styled.div`
  margin: 0 24px;
`

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // /!\ Should remove events on componentWillUnmount

    // Open mobile menu
    $('.menu__mobile-button, .mobile-menu__close').on('click', function () {
      $('.mobile-menu').toggleClass('active');
    });

    // Close mobile menu after click
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
        <NavContainer className="menu">
          <InnerContainer >
            <MenuMobile className="menu__mobile">
              <button type="button" className="menu__mobile-button">
                <span style={{ outline: 'none' }}><i className="fa fa-bars" aria-hidden="true"></i></span>
              </button>
            </MenuMobile>
            <MobileMenuContainer className="mobile-menu">
              <div style={{ width: '100%', padding: '15px 0' }}>
                <div className="mobile-menu__close">
                  <span><i className="fa fa-times" aria-hidden="true"></i></span>
                </div>
                <nav className="mobile-menu__wrapper">
                  <MenuLinks />
                </nav>
              </div>
            </MobileMenuContainer>
            <MenuContainer className="menu__wrapper">
              <MenuLinks />
            </MenuContainer>
          </InnerContainer>
        </NavContainer>
        <MainHeader bgImage={this.props.data.bgHeader.sizes.src} >
          <HeaderInner>
            <IdentityContainer>
              <Img sizes={this.props.data.profile.sizes} alt="Fabrice Payet: Développeur indépendant à la Réunion" />
              <NameContainer>
                <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '48px' }}>
                  Fabrice Payet
                </div>

                <div style={{ fontSize: '24px' }}>
                  {this.props.data.site.siteMetadata.title.split('-')[1]}
                </div>
              </NameContainer>
            </IdentityContainer>
          </HeaderInner>
        </MainHeader>
      </div >
    );
  }
}

export default Header
