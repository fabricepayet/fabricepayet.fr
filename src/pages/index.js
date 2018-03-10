import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: center;

  input,
  textarea {
    width: 60%;
    margin-bottom: 6px;
    border-radius: 6px;
    padding: 3px 6px;
    outline: none;
    border: 1px solid #bbb;
  }

  button {
    border-radius: 6px;
    padding: 2px 6px;
    border: 1px solid #aaaaaa;
  }
`

const IndexPage = () => (
  <div>
    <h1>Bienvenue</h1>
    <FormContainer>
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
    </FormContainer>
  </div>
)

export default IndexPage
