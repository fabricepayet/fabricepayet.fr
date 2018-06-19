import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const ArticleContainer = styled.div`
  background-color: #fff;
  padding: 50px 70px 60px;
  margin-top: -270px;
  box-shadow: 0 1px 21px rgba(0,0,0,.14);
  margin-bottom: 40px;
  margin: 48px auto;
  max-width: 1140px;

  h2 {
    font-family: Roboto Mono,monospace;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 26px;
  }

  h3 {
    font-family: "Roboto Mono", monospace;
  }

  @media screen and (max-width: 1188px) {
    margin: 0 24px;
  }
`

const BackContainer = styled.div`
  svg {
    margin-right: 10px;
  }

  a {
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: #999;
    transition: all .3s;

    &:hover {
      color: #555;
      text-decoration: none;
    }
  }
`

const Date = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #999;
  margin-bottom: 15px;
`

export default class BlogTemplate extends Component {
  render() {
    const { data } = this.props;
    return (
      <ArticleContainer>
        <BackContainer>
          <Link to="/"><i className="fa fa-arrow-left"></i> Retour</Link>
        </BackContainer>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <Date>{data.markdownRemark.frontmatter.date}</Date>
        <div dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }} />
      </ArticleContainer>
    )
  }
};


export const query = graphql`
  query BlogPostQuery($slug: String) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
