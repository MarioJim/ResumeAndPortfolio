import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
}

const SEO = ({ title }: Props) => (
  <Head>
    <title>{title || 'Mario Jiménez'}</title>
    <meta property="og:title" content={title || 'Mario Jiménez'} />
  </Head>
);

export default SEO;
