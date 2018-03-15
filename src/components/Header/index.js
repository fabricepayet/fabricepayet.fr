import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Photo from '../../images/photo.jpg'

const LinkContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  flex: 1 1 auto;

  a {
    margin-right: 24px;
    text-decoration: none;
    color: #0091ca;
    border-bottom: 4px solid transparent;

  }

  a:hover {
    border-color: #0091ca:
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
  <div style={{ borderBottom: '1px solid #ddd', marginBottom: '48' }}>
    <HeaderInner>
      <LinkContainer>
        <Link
          to="/"
          activeStyle={{
            color: 'black',
          }}
        >
          About
        </Link>
        <Link
          to="/portfolio/"
          activeStyle={{
            color: 'black',
          }}
        >
          Portfolio
        </Link>
        <a href="https://github.com/fpayet" target="_blank">
          Github
        </a>
      </LinkContainer>
      <IdentityContainer>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '18' }}>
            Fabrice Payet
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '14' }}>
            Full Stack Developer
          </div>
        </div>
        <img src={Photo} alt="Fabrice Payet" />
      </IdentityContainer>
    </HeaderInner>
  </div>
)

export default Header
