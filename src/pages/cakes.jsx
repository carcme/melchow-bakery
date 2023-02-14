import React from "react";
import AllCakes from "../components/AllCakes";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const Cakes = () => {
  return (
    <Layout>
      <Seo title="Cakes" description="" />
      <main className="page">
        <AllCakes />
      </main>
    </Layout>
  );
};

export default Cakes;
