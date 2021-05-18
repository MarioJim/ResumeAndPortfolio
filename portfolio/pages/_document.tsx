import React from 'react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { fetchOpenGraphImageRequest } from '../lib/opengraph-image-request';

interface MyDocumentProps {
  ogImage: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      ogImage: await fetchOpenGraphImageRequest(),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Mario Jiménez' portfolio" />
          <meta property="og:description" content="Mario Jiménez' portfolio" />
          <meta property="og:url" content="https://mariojim.github.io/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={this.props.ogImage} />
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
