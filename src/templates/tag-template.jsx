import React from "react";
import { graphql } from "gatsby";
import CakesList from "../components/CakesList";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const TagTemplate = ({ data, pageContext }) => {
  const cakes = data.allContentfulBakery.nodes;
  return (
    <Layout>
      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-cakes">
          <CakesList cakes={cakes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetCakesByTag($tag: String) {
    allContentfulBakery(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
