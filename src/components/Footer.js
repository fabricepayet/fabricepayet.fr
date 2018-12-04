import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from './Button'

const FooterContainer = styled.div`
  background-color: #6d56c1;
  background-image: url(${props => props.bgImage});
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  color: #fff;
  z-index: 160;
  font-family: Roboto Mono, monospace;

  li {
    a {
      color: white;
    }  
  }

  dd {
    a {
      color: white;
    }  
  }
  

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
const FormContainer = styled.div`
  flex: 0 1 auto;

  input,
  textarea {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 8px 12px;
    outline: none;
    border: 1px solid #bbb;
    background-color: transparent;
    color: white;
  }

  form {
    margin: 24px 0;
  }

  button {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    margin-top: 48px;
  }
`

const SectionTitle = styled.h2`
  margin: 24px 0 48px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  color: white;
  font-weight: normal;
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 1140px;
  padding: 24px;

  form {
    margin-bottom: 0;
  }
`

const FooterRights = styled.div`
  margin-top: 48px;
  font-size: 0.8rem;
  text-align: center;

  a {
    color: white !important;

    &:hover,
    &:active {
      opacity: 0.5;
    }
  }
`

const ContactFooterContainer = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    display: block;
  }
`

const SocialContainer = styled.div`
  flex: 0 1 500px;

  dt {
    display: inline-block;
    width: 140px;
    float: left;
  }

  dd {
    padding-left: 140px;
    margin-bottom: 15px;
  }

  a {
    color: white;

    &:hover,
    &:active {
      opacity: 0.5;
    }
  }
  `

const MoreSocial = styled.div`
  margin-top: 48px;

  ul {
    list-style-type: none;
    margin: 0;
  }
`

const Footer = ({ data }) => {
  return (
    <FooterContainer id="main-footer" bgImage={data.bgFooter.sizes.src}>
      <InnerContainer>

        <SectionTitle>Contactez-moi</SectionTitle>
        <ContactFooterContainer id="contact">
          <SocialContainer>
            <div>
              <dl>
                <dt>Téléphone:</dt>
                <dd><a href="tel:+262692002669">0692 00 26 69</a></dd>
                <dt>Skype:</dt>
                <dd><a href="skype:hello@fabricepayet.fr">hello@fabricepayet.fr</a></dd>
                <dt>Email:</dt>
                <dd><a href="mailto:hello@fabricepayet.fr">hello@fabricepayet.fr</a></dd>
              </dl>
            </div>
            <MoreSocial>
              <ul>
                <li><a href="https://www.linkedin.com/in/fabricepayetpro/" target="_blank"><i className="fab fa-linkedin" /> Linkedin</a></li>
                <li><a href="https://www.facebook.com/fabricepayetpro" target="_blank"><i className="fab fa-facebook" /> Facebook</a></li>
                <li><a href="https://twitter.com/fabricepayett" target="_blank"><i className="fab fa-twitter" /> Twitter</a></li>
                <li><a href="https://github.com/fpayet" target="_blank"><i className="fab fa-github" /> GitHub</a></li>
                <li><a href="https://bitbucket.org/FabricePayet" target="_blank"><i className="fab fa-bitbucket" /> Bitbucket</a></li>
              </ul>
            </MoreSocial>
          </SocialContainer>
          <FormContainer>
            <div>Vous avez une idée de projet ? Une question ? Ecrivez-moi.</div>

            <form
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <input type="text" name="name" placeholder="Nom" required />
              </div>

              <div>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message" required
                />
              </div>
              <Button label="Envoyer" />
            </form>
          </FormContainer>
        </ContactFooterContainer>
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
