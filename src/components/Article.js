import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import styled from 'styled-components';

const ArticleStyled = styled.article`
  flex: 0 0 33.33333%;
  border: 1px solid #f1f1f1;
  padding: 20px 40px 40px 20px;

  @media screen and (max-width: 800px) {
    padding-bottom: 20px;
    margin-bottom: 6px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 31px rgba(0, 0, 0, .09);
  }

  h3 {
    font-family: Roboto Mono,monospace;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-weight: 700;
    color: #555;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-bottom: 0;
  }
`

const Date = styled.span`
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 10px;
`

export default class Article extends Component {
  render() {
    const { article } = this.props;
    return (
      <ArticleStyled onClick={() => { navigateTo(article.fields.slug) }}>
        <div style={{ maxHeight: '180px', overflow: 'hidden' }}>
          <img src={article.frontmatter.cover} alt={`cover`} />
        </div>
        <Date>{article.frontmatter.date}</Date>
        <Link to={article.fields.slug}>
          <h3>{article.frontmatter.title}</h3>
        </Link>
        <p>{article.excerpt}</p>
      </ArticleStyled>
    )
  }
};
