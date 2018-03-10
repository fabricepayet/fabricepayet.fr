import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Bienvenue</h1>
    <form
      action=""
      method="post"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" name="name" placeholder="Votre nom" />
      <input type="email" name="email" placeholder="Votre email" />
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Votre message"
      />
      <button>Send</button>
    </form>
  </div>
)

export default IndexPage
