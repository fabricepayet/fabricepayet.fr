import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

const ResumeItemContainer = styled.div`
  display: flex;
  margin-bottom: 24px;

  h3 {
    margin-bottom: 0.3rem;
  }

  img {
    margin-right: 24px;
    flex: none;
    height: 100px;
    width: 100px;
  }

  p {
    margin-bottom: 0;
  }
`

const DateContainer = styled.span`
  font-size: 14px;
  color: #5d5d5d;
`

const Techno = styled.div`
  font-size: 14px;
  color: #dea43a;
`

class ResumeItem extends Component {
  render() {
    return (
      <ResumeItemContainer>
        <img
          src={withPrefix(`/images/${this.props.logo}`)}
          alt={this.props.company}
        />
        <div>
          <h3>{this.props.title}</h3>
          <div>
            {this.props.companyLink ? (
              <a href={this.props.companyLink} target="_blank">
                {this.props.company}
              </a>
            ) : (
              <span>{this.props.company}</span>
            )}{' '}
            {this.props.date && (
              <DateContainer>({this.props.date})</DateContainer>
            )}
          </div>
          {this.props.description && <p>{this.props.description}</p>}
          {this.props.technologies && (
            <Techno>{this.props.technologies}</Techno>
          )}
        </div>
      </ResumeItemContainer>
    )
  }
}

export default ResumeItem
