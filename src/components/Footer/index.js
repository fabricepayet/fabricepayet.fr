import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterContainer = styled.div`
  padding: 48px 0;
  text-align: center;
`
const LinkContainer = styled.div`
  a {
    margin-right: 24px;
    text-align: center;
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

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <LinkContainer>
          <a href="https://github.com/fpayet" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/fabricepayetpro/"
            target="_blank"
          >
            Linkedin
          </a>
        </LinkContainer>
      </InnerContainer>
    </FooterContainer>
  )
}

export default Footer
