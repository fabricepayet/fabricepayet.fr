import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import ReactDisqusThread from 'react-disqus-thread';

import MailChimp from '../components/Mailchimp';

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareCount,
  EmailShareButton,
  EmailIcon
} from 'react-share';

const SocialButtonContainer = styled.div`
  margin-bottom: 24px;
  display: flex;

  div[role='button'] {
    margin-right: 2px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`

const ArticleContainer = styled.div`
  background-color: #fff;
  padding: 50px 70px 60px;
  margin-top: -270px;
  box-shadow: 0 1px 21px rgba(0,0,0,.14);
  margin-bottom: 40px;
  margin: 48px auto;
  max-width: 1140px;

  p {
    line-height: 30px;
    margin-bottom: 1rem;
  }

  h1 {
    font-family: Roboto Mono,monospace;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 24px;
    // letter-spacing: -1px;
    color: #6d56c1;
  }

  h2 {
    font-family: Roboto Mono,monospace;
    font-weight: 700;
    margin: 48px 0 24px;
    font-size: 1.2em;
    color: rgba(0,0,0,0.8)
  }

  img {
    display: flex;
    margin: auto;
  }

  blockquote {
    border-left: 0.25em solid #dfe2e5;
    padding-left: 16px;
    margin: 2rem;

    p {
      margin-bottom: 0;
      font-size: 1.1em;
      font-style: italic;
    }
  }

  h3 {
    font-family: Roboto, monospace;
    font-size: 18px;
  }

  ul {
    li {
      margin-bottom: 0.3rem;
    }
  }

  @media screen and (max-width: 1188px) {
    margin: 0 24px;
    padding: 24px 0;
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    padding: 24px 24px 0 24px;
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
  margin-bottom: 12px;
`

export default class BlogTemplate extends Component {
  render() {
    const { data } = this.props;
    return (
      <ArticleContainer>
        <Helmet>
          <title>{data.markdownRemark.frontmatter.title}</title>
          <meta name="description" content={data.markdownRemark.excerpt} />
        </Helmet>
        <BackContainer>
          <Link to="/blog"><i className="fa fa-arrow-left"></i> Retour</Link>
        </BackContainer>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <Date>publié le {data.markdownRemark.frontmatter.date}</Date>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: 'small', color: 'grey' }}>Partager cet article: </div>
          <SocialButtonContainer>
            <FacebookShareButton url={`https://fabricepayet.fr/${data.markdownRemark.fields.slug}`}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={`https://fabricepayet.fr/${data.markdownRemark.fields.slug}`}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={`https://fabricepayet.fr/${data.markdownRemark.fields.slug}`}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <EmailShareButton url={`https://fabricepayet.fr/${data.markdownRemark.fields.slug}`}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            {/* <FacebookShareCount url={`https://fabricepayet.fr/${data.markdownRemark.fields.slug}`} /> */}
          </SocialButtonContainer>

        </div>
        <div dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }} />
        <MailChimp />
        <ReactDisqusThread
          shortname="fabricepayetfr"
          identifier={data.markdownRemark.fields.slug}
          title={data.markdownRemark.frontmatter.title}
          url={`https://fabricepayet.fr/${data.markdownRemark.fields.slug}`}
        />
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
      fields {
        slug
      }
      excerpt(pruneLength: 230)
    }
  }
`
