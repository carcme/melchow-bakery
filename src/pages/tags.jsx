import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import Seo from "../components/SEO";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulBakery.nodes);

  return (
    <Layout>
      <Seo title="Tags" description="" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text).toLocaleLowerCase();
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} cake</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBakery {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
