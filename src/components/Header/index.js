import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Photo from '../../images/photo.jpg'
import jump from 'jump.js';

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

  @media screen and (max-width: 800px) {
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

  a {
    color: white;
    margin-right: 50px;
    text-decoration: none !important;

    &:active,
    &:hover {
      opacity: 0.5;
    }
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

const Header = () => (
  <div>
    <NavContainer className="menu">
      <InnerContainer >
        <MenuContainer className="menu__wrapper">
          <Link
            to="#about"
            onClick={(e) => { e.preventDefault(); jump('#about'); }}
          >
            A propos
          </Link>
          <Link
            to="#resume"
            onClick={(e) => { e.preventDefault(); jump('#resume'); }}
          >
            Expériences
          </Link>
          <Link
            to="#contact"
            onClick={(e) => { e.preventDefault(); jump('#contact'); }}
          >
            Contact
          </Link>
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
              Développeur Freelance
              </div>
          </div>
        </IdentityContainer>
      </HeaderInner>
    </MainHeader>
  </div>
)

export default Header
