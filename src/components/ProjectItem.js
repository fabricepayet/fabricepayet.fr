import React, { Component } from 'react';
import styled from 'styled-components';
import ListTags from './ListTags';

const Project = styled.div`
  display: flex;
  margin-left: 0;
  transition: box-shadow .3s;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const ImageContainer = styled.div`
  flex: 0 0 40%;
  background-color: #f3f3f3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `

const Description = styled.div`
  border: 1px solid #f1f1f1;
  padding: 50px 50px 40px 30px;
  flex: 0 0 60%;
  position: relative;
  width: 100%;
  min-height: 1px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  h3 {
    font-size: 18px;
    line-height: 30px;
    font-family: Roboto Mono,monospace;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 45px;
  }

  a {
    margin-top: 55px;
    font-family: Roboto Mono,monospace;
    font-size: 14px;
    line-height: 20px;
    float: right;
    color: #6d56c1;
    transition: all .3s;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

export default class ProjectItem extends Component {
  render() {
    return (
      <Project>
        <ImageContainer>
          <img src={this.props.image} alt={this.props.name} />
        </ImageContainer>
        <Description>
          <h3>{this.props.name}</h3>
          <p>
            {this.props.description}
          </p>
          <ListTags tags={this.props.tags} />
          <a href={this.props.link} target="_blank">{this.props.link}</a>
        </Description>
      </Project>
    );
  }
};

