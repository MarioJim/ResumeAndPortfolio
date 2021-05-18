import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
}

const SEO: React.FC<Props> = ({ title }) => (
  <Head>
    <title>{title || 'Mario Jiménez'}</title>
    <meta property="og:title" content={title || 'Mario Jiménez'} />
  </Head>
);

export default SEO;
