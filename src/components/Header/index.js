import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Photo from '../../images/photo.jpg'

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
  z-index: 100;

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

const MenuContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  flex: 1 1 auto;
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  
  a {
    color: white;
    margin-right: 50px;
    text-decoration: none !important;

    &:active {
      color: #b1b1b1;
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    padding-top: 24px;
  }
`
const HeaderInner = styled.div`
  align-item: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row-reverse;
  max-width: 1140px;
  padding-top: 24px;

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

const Header = () => (
  <MainHeader>
    <MenuContainer>
      <Link
        to="/"
        exact
        activeStyle={{
          color: '#ddd',
        }}
      >
        About
        </Link>
      <Link
        to="/resume/"
        activeStyle={{
          color: '#ddd',
        }}
      >
        Expériences
        </Link>
      <Link
        to="/contact/"
        activeStyle={{
          color: '#ddd',
        }}
      >
        Contact
        </Link>
    </MenuContainer>
    <HeaderInner>
      <IdentityContainer>
        <img src={Photo} alt="Fabrice Payet" />
        {/* <ImageContainer>
        </ImageContainer> */}
        <div>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '48px' }}>
            Fabrice Payet
          </div>

          <div style={{ fontSize: '24px' }}>
            Développeur indépendant
              </div>
        </div>
      </IdentityContainer>
    </HeaderInner>
  </MainHeader>
)

export default Header
