import React from 'react'
import styled from 'styled-components'

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const FormContainer = styled.div`
  text-align: center;

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

    &:hover {
      cursor: pointer;
      background-color: #eaeaea;
    }
  }

  form {
    margin-top: 24px;
    margin-bottom: 0;
  }
`

const PortfolioPage = () => (
  <InnerContainer>
    <FormContainer>
      <InnerContainer>
        <h2>Contactez-moi</h2>
        <div>Vous avez une idée de projet ? Une question ? Ecrivez-moi.</div>

        <form
          method="post"
          name="form-contact"
          data-netlify="true"
          netlify
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
  </InnerContainer>
)

export default PortfolioPage
