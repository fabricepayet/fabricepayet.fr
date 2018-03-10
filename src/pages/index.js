import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Photo from '../images/photo.jpg'

const FormContainer = styled.div`
  text-align: center;
  background-color: #413b77;
  padding: 24px;

  input,
  textarea {
    width: 60%;
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 8px 12px;
    outline: none;
    border: 1px solid #bbb;
  }

  button {
    border-radius: 8px;
    border: 1px solid #aaaaaa;
    background-color: white;
    padding: 8px 20px;
  }
`

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 160px;
    border-radius: 50%;
    margin-right: 24px;
  }
`

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const IndexPage = () => (
  <div>
    <InnerContainer>
      <ResumeContainer>
        <img src={Photo} alt="Fabrice Payet" />
        <p>
          En tant que développeur full stack, j'ai travaillé avec de nombreuses
          startup dans validation et la conception de leur produit. Actuellement
          indépendant, je propose mes services de développement et
          d'accompagnement dans des projets d'applications web et mobile.
        </p>
      </ResumeContainer>
    </InnerContainer>
    <FormContainer>
      <InnerContainer>
        <form
          action=""
          method="post"
          name="contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div>
            <input type="text" name="name" placeholder="Votre nom" />
          </div>

          <div>
            <input type="email" name="email" placeholder="Votre email" />
          </div>
          <div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Votre message"
            />
          </div>
          <button>Envoyer</button>
        </form>
      </InnerContainer>
    </FormContainer>
  </div>
)

export default IndexPage
