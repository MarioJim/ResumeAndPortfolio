import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Mario Jiménez' portfolio" />
          <meta property="og:description" content="Mario Jiménez' portfolio" />
          <meta property="og:url" content="https://mariojim.github.io/" />
          <meta property="og:type" content="website" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
