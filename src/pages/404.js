import React, { Component } from 'react';
import axios from 'axios'
import Link from 'gatsby-link';

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    }
  }

  componentWillMount() {
    axios.get('https://api.thecatapi.com/v1/images/search?size=full')
      .then(response => {
        this.setState({
          imageUrl: response.data[0].url
        })
      }).catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
          textAlign: 'center'
        }}
      >
        <Link to="/"><i className="fa fa-arrow-left"></i> Retour</Link>
        <h1 style={{ textAlign: 'center' }}>Miaouss ! Il n'y a rien ici...</h1>
        {this.state.imageUrl ?
          <img src={this.state.imageUrl} alt="cat not found" /> :
          ''
        }
      </div>
    )
  }
}
