import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

const Company = styled.span`
  text-transform: uppercase;
  color: #6d56c1;
  font-size: 14px;
  line-height: 20px;
  font-family: Roboto Mono,monospace;
  font-weight: 700;
  padding-bottom: 5px;
`

const CompanyLink = styled.a`
  text-transform: uppercase;
  color: #6d56c1;
  font-size: 14px;
  line-height: 20px;
  font-family: Roboto Mono,monospace;
  font-weight: 700;
  padding-bottom: 5px;
`

const ResumeItemContainer = styled.div`
  display: flex;
  border-left: 2px solid #6d56c1;
  padding-left: 25px;
  padding-bottom: 50px;

  &:before {
    width: 12px;
    height: 12px;
    border: 2px solid #6d56c1;
    position: absolute;
    content: "";
    border-radius: 50%;
    background-color: #fff;
    left: 10px;
  }

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.2em;
  }

  img {
    margin-right: 24px;
    flex: none;
    height: 40px;
    width: 40px;
    position: relative;
    top: 4px;
  }

  p {
    margin: 0;
  }
`

const DateContainer = styled.span`
  font-size: 14px;
  color: #5d5d5d;
`

const Techno = styled.div`
  font-size: 14px;
  font-family: Inconsolata,monospace;
  text-transform: uppercase;
`

const Description = styled.p`
  font-size: 0.8rem;
  font-style: italic;
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
          <div>
            {this.props.companyLink ? (
              <CompanyLink href={this.props.companyLink} target="_blank">
                {this.props.company}
              </CompanyLink>
            ) : (
                <Company>{this.props.company}</Company>
              )}{' '}
            {this.props.date && (
              <DateContainer>({this.props.date})</DateContainer>
            )}
          </div>
          <p>{this.props.title}</p>
          {this.props.description && <Description>{this.props.description}</Description>}
          {this.props.technologies && (
            <Techno><i className="fa fa-wrench"></i> {this.props.technologies}</Techno>
          )}
        </div>
      </ResumeItemContainer>
    )
  }
}

export default ResumeItem
