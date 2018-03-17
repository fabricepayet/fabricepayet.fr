import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Photo from '../../images/photo.jpg'

const LinkContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  flex: 1 1 auto;
  display: flex;

  a {
    margin-right: 24px;
    text-decoration: none !important;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    padding-top: 24px;
  }
`
const HeaderInner = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row-reverse;
  max-width: 960px;

  @media screen and (max-width: 600px) {
    display: block;
  }
`
const IdentityContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-left: 12px;
    margin-bottom: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    padding-top: 24px;
  }
`

const Header = () => (
  <div
    style={{
      borderBottom: '1px solid #ddd',
      marginBottom: '48px',
      backgroundColor: 'whitesmoke',
    }}
  >
    <HeaderInner>
      <IdentityContainer>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Fabrice Payet
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '14px' }}>
            Full Stack Developer
          </div>
        </div>
        <img src={Photo} alt="Fabrice Payet" />
      </IdentityContainer>
      <LinkContainer>
        <Link
          to="/"
          exact
          activeStyle={{
            color: 'black',
          }}
        >
          About
        </Link>
        <Link
          to="/resume/"
          activeStyle={{
            color: 'black',
          }}
        >
          Resume
        </Link>
        <Link
          to="/portfolio/"
          activeStyle={{
            color: 'black',
          }}
        >
          Portfolio
        </Link>
        <Link
          to="/contact/"
          activeStyle={{
            color: 'black',
          }}
        >
          Contact
        </Link>
      </LinkContainer>
    </HeaderInner>
  </div>
)

export default Header
