import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title?: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );
  const siteTitle = title || site.siteMetadata.title;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={siteTitle}>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og.title" content={siteTitle} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
