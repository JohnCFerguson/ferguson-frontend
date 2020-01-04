import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container dark-theme">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query Resume {
    allFile(filter: {name: {eq: "resume.md"}}) {
      edges {
        node {
          name
          childMarkdownRemark {
            html
            timeToRead
            frontmatter {
              title
              cover
              date
              category
              tags
            }
            fields {
              slug
              date
            }
          }
        }
      }
    }
  }`;
