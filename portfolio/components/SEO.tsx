import Head from 'next/head';

interface SEOProps {
  title?: string;
}

const SEO = ({ title }: SEOProps) => (
  <Head>
    <title>{title || 'Mario Jiménez'}</title>
    <meta property="og:title" content={title || 'Mario Jiménez'} />
  </Head>
);

export default SEO;
