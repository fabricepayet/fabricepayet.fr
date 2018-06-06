import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background: url(https://images.unsplash.com/reserve/oGLumRxPRmemKujIVuEG_LongExposure_i84.jpeg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63998dad379975e2eb90bdf3b2c6f187&auto=format&fit=crop&w=1353&q=80);
  text-align: center;
  background-color: #6d56c1;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  color: #fff;
  z-index: 500;

  &:before {
    background: linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95));
    height: 100%;
    left: 0;
    right: 0;
    position: absolute;
    content: "";
    z-index: -1;
  }
`
const LinkContainer = styled.div`
  a {
    margin-right: 24px;
    text-align: center;
    color: white;
    font-size: 1.2rem;

    &:hover {
      text-decoration: none !important;
    }
  }
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 1140px;
  padding: 48px 0px;

  form {
    margin-bottom: 0;
  }
`

const FooterRights = styled.div`
  margin-top: 48px;
  font-size: 0.8rem;

  a {
    color: white;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <LinkContainer>
          <a href="https://github.com/fpayet" target="_blank">
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabricepayetpro/"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
        </LinkContainer>
        <FooterRights>
          <p>© 2018 Fabrice Payet - <i className="fa fa-rocket"></i> with <a href="https://www.gatsbyjs.org/" target="_blank">
            Gatsby
          </a></p>
        </FooterRights>
      </InnerContainer>
    </FooterContainer>
  )
}

export default Footer
