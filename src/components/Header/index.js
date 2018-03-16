import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Photo from '../../images/photo.jpg'

const LinkContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  flex: 1 1 auto;

  a {
    margin-right: 24px;
    text-decoration: none !important;
    border-bottom: 4px solid transparent;
  }
`
const HeaderInner = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  margin: 12px auto;
  max-width: 960px;
`
const IdentityContainer = styled.div`
  display: flex;

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-left: 12px;
    margin-bottom: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Header = () => (
  <div style={{ borderBottom: '1px solid #ddd', marginBottom: '48px' }}>
    <HeaderInner>
      <LinkContainer>
        <Link
          to="/"
          exact
          activeStyle={{
            color: '#116756',
          }}
        >
          About
        </Link>
        <Link
          to="/resume/"
          activeStyle={{
            color: '#116756',
          }}
        >
          Resume
        </Link>
        <Link
          to="/portfolio/"
          activeStyle={{
            color: '#116756',
          }}
        >
          Portfolio
        </Link>
        <Link
          to="/contact/"
          activeStyle={{
            color: '#116756',
          }}
        >
          Contact
        </Link>
      </LinkContainer>
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
    </HeaderInner>
  </div>
)

export default Header
