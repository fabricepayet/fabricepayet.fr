import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Button from './Button';

export default class MailChimp extends Component {

  constructor(props) {
    super(props);

    this.saveEmail = this.saveEmail.bind(this);

    this.state = {
      email: ''
    }
  }

  saveEmail = e => {
    e.preventDefault;
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    return (
      <div style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ color: "#6d55c1", fontStyle: 'italic', textAlign: 'center' }}>Vous avez aimé cet article ? Recevez le prochain directement dans votre boite email</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="email"
            style={{
              width: "100%",
              maxWidth: '500px',
              borderRadius: " 6px 0 0 6px",
              borderColor: '#6d56c1',
              padding: "8px 12px",
              outline: "none",
              border: "1px solid #b5b5b5",
              backgroundColor: "transparent",
            }} />
          <button
            type="submit"
            style={{
              borderRadius: '0 6px 6px 0',
              backgroundColor: "#6d56c1",
              height: "50px",
              borderRadius: "0 6px 6px 0",
              border: "0",
              fontSize: "14px",
              lineHeight: "20px",
              textTransform: "uppercase",
              padding: "15px",
              minWidth: "170px",
              textAlign: "center",
              display: "inline-block",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "600",
              overflow: "hidden",
              boxShadow: "0 1px 29px rgba(0,0,0,.16)"
            }}
            onClick={this.saveEmail}>
            S'inscrire
          </button>
        </div>
      </div>
    )
  }
}
