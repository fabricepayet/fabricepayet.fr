import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../Button'

const FooterContainer = styled.div`
  background: url(https://images.unsplash.com/reserve/oGLumRxPRmemKujIVuEG_LongExposure_i84.jpeg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63998dad379975e2eb90bdf3b2c6f187&auto=format&fit=crop&w=1353&q=80);
  background-color: #6d56c1;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  color: #fff;
  z-index: 500;
  font-family: Roboto Mono, monospace;

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
`

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  font-weight: normal;
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
  text-align: center;

  a {
    color: white;
  }
`

const ContactFooterContainer = styled.div`
  display: flex;
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
  }

  `

const MoreSocial = styled.div`
  margin-top: 48px;

  ul {
    list-style-type: none;
    margin: 0;
  }
`

const Footer = () => {
  return (
    <FooterContainer id="main-footer">
      <InnerContainer>

        <SectionTitle>Contactez moi</SectionTitle>
        <ContactFooterContainer>
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
                <input type="text" name="name" placeholder="Nom" />
              </div>

              <div>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
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
