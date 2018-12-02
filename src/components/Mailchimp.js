import React, { Component, Fragment } from 'react';
// import addToMailchimp from 'gatsby-plugin-mailchimp'
import jsonp from 'jsonp'
import { validate } from 'email-validator'


import Button from './Button';
import { consolidateStreamedStyles } from 'styled-components';

export default class MailChimp extends Component {

  constructor(props) {
    super(props);

    this.saveEmail = this.saveEmail.bind(this);

    this.state = {
      email: '',
      isSubscribe: false,
      error: ''
    }
  }

  saveEmail = e => {
    e.preventDefault;
    const isEmailValid = validate(this.state.email)
    const emailEncoded = encodeURIComponent(this.state.email)
    if (!isEmailValid) {
      this.setState({
        error: "Votre email n'est pas valide !"
      })
      return;
    }

    // generate Mailchimp endpoint for jsonp request
    // note, we change `/post` to `/post-json`
    // otherwise, Mailchomp returns an error

    const endpointMaichimp = "https://fabricepayet.us19.list-manage.com/subscribe/post?u=283fdcb87f6389637411cb0cf&amp;id=5806eb8fe5"
    const endpoint = endpointMaichimp.replace(/\/post/g, '/post-json')

    // const queryParams = `&EMAIL=${emailEncoded}${convertListFields(fields)}`
    const queryParams = `&EMAIL=${emailEncoded}`
    const url = `${endpoint}${queryParams}`

    return jsonp(url, { param: 'c', timeout: 3500 }, (err, data) => {
      if (err) {
        this.setState({
          error: err
        })
      } else {
        this.setState({
          email: '',
          isSubscribe: true,
        });
      }
    })
  }

  render() {
    return (
      <div style={{ padding: '24px', marginBottom: '24px' }}>
        {
          this.state.isSubscribe ?
            <div style={{ color: "#6d55c1", fontStyle: 'italic', textAlign: 'center' }}>
              Merci de vous être inscrit !
          </div> :
            <div>

              <div>
                <div style={{ color: "#6d55c1", fontStyle: 'italic', textAlign: 'center', maxWidth: '460px', margin: '12px auto' }}>
                  Vous avez aimé cet article ? Recevez le prochain directement dans votre boite email
                    </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    type="email"
                    style={{
                      width: "100%",
                      maxWidth: '360px',
                      borderRadius: " 6px 0 0 6px",
                      borderColor: '#6d56c1',
                      padding: "8px 12px",
                      outline: "none",
                      border: "1px solid #b5b5b5",
                      backgroundColor: "transparent",
                      color: "#353535"
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
                {this.state.error ? <div style={{ textAlign: 'center', color: 'red' }}>{this.state.error}</div> : ''}
              </div>
            </div>
        }
      </div>
    )
  }
}
