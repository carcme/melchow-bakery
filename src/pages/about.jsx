import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import CakesList from "../components/CakesList";
import Seo from "../components/SEO";

const About = ({
  data: {
    allContentfulBakery: { nodes: cakes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" description="About page for Melchow Brau" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Cupcake Ipsum</h2>
            <p>
              Wafer icing cotton candy oat cake. Toffee muffin jelly jelly beans
              toffee. Tart topping tiramisu tiramisu jelly. Danish chocolate
              chupa chups ice cream tootsie roll topping chocolate.
            </p>
            <p>
              Wafer icing cotton candy oat cake. Toffee muffin jelly jelly beans
              toffee. Tart topping tiramisu tiramisu jelly.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/tart.jpg"
            alt="Beers on a counter top"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-cakes">
          <h5>Our Featured Taste-tastic!</h5>
          <CakesList cakes={cakes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBakery(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
