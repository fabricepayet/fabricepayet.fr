import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Photo from '../../images/photo.jpg';
import MenuLinks from '../MenuLinks';

const MainHeader = styled.div`
  border-bottom: 1px solid #ddd;
  background-image: url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=356407ef05a295cb49a302360f91fbde);
  background-color: #6d56c1;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  font-family: Roboto Mono,monospace;
  z-index: 150;
  
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
  
  @media screen and (max-width: 600px) {
    // display: block;
  }
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
  
  img {
    margin-right: 50px;
    margin-bottom: 0;
    position: relative;
    top: 24px;
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

    img {
      position: initial;
      z-index: 1000;
      margin-bottom: 24px;
      margin-right: 0px;
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

const Header = ({ data }) => (
  <div>
    <NavContainer className="menu">
      <InnerContainer >
        <MenuMobile className="menu__mobile">
          <button type="button" className="menu__mobile-button">
            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
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
    <MainHeader>
      <HeaderInner>
        <IdentityContainer>
          <img src={Photo} alt="Fabrice Payet" />
          <div>
            <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '48px' }}>
              Fabrice Payet
          </div>

            <div style={{ fontSize: '24px' }}>
              {data.site.siteMetadata.title}
            </div>
          </div>
        </IdentityContainer>
      </HeaderInner>
    </MainHeader>
  </div>
)

export default Header
