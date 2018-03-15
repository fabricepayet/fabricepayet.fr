import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FormContainer = styled.div`
  text-align: center;
  background-color: #0091ca;
  padding: 48px 24px;

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

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;

  form {
    margin-bottom: 0;
  }
`

const Footer = () => (
  <div>
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
          <button>Envoyer</button>
        </form>
      </InnerContainer>
    </FormContainer>
  </div>
)

export default Footer
