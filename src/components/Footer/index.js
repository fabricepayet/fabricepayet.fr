import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterContainer = styled.div`
  padding: 24px 0;
  text-align: center;
  border-top: 1px solid #ddd;
  background-color: whitesmoke;
`
const LinkContainer = styled.div`
  a {
    margin-right: 24px;
    text-align: center;
    color: #525252;
    font-size: 22px;

    &:hover {
      text-decoration: none !important;
    }
  }
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;

  form {
    margin-bottom: 0;
  }
`

const BuildWith = styled.div`
  font-size: 0.8rem;
  color: #5d5d5d;
  margin-bottom: 12px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <BuildWith>
          Build with{' '}
          <a href="https://www.gatsbyjs.org/" target="_blank">
            Gatsby
          </a>
        </BuildWith>
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
      </InnerContainer>
    </FooterContainer>
  )
}

export default Footer
