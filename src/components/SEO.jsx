import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import CapitaliseLetter from "./CapitaliseLetter";

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  // if description not specified, default to meta description
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "de" }} // set the language
      title={`${CapitaliseLetter(title)} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `msapplication-TileColor`, content: `da532c` },
        { name: `theme-color`, content: `#ffffff` },
      ]}
      link={[
        {
          rel: `apple-touch-icon`,
          sizes: `180x180`,
          href: `/apple-touch-icon.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `32x32`,
          href: `/favicon-32x32.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `16x16`,
          href: `/favicon-16x16.png`,
        },
        { rel: `manifest`, href: `/site.webmanifest` },
        { rel: `mask-icon`, href: `/safari-pinned-tab.svg`, color: `#5bbad5` },
      ]}
    ></Helmet>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default Seo;
