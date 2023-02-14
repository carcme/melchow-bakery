import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllCakes from "../components/AllCakes";
import Seo from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description="Homepage for Melchow Brau" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/tart.jpg"
            alt="hero image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>3B Backery</h1>
              <h4>Our Bakery, your belly</h4>
            </div>
          </div>
        </header>
        <AllCakes />
      </main>
    </Layout>
  );
}
