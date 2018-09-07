import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Article from '../components/Article';

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 1140px;
  padding: 74px 0;

  @media screen and (max-width: 1188px) {
    padding: 24px;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  font-weight: normal;

  @media screen and (max-width: 800px) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;

const BlogPage = ({ data }) => (
  <div>
    <Header data={data} />
    <InnerContainer id="blog">
      <SectionTitle>Mes articles</SectionTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (<Article article={node} key={node.id} />))}
      </div>
    </InnerContainer>
  </div>
)

export const query = graphql`
  query SiteMeta {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 50
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            cover
          }
          excerpt(pruneLength: 180)
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }

    bgHeader: imageSharp(id: {regex: "/bg-header.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }

    profile: imageSharp(id: {regex: "/photo.jpg/"}) {
      sizes(maxWidth: 270) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default BlogPage;
