import { Inter } from '@next/font/google';
import { fetchOpenGraphImage } from '../lib/fetch-opengraph-image';
import Header from '../components/Header';
import styles from '../styles/layout.module.scss';
import '../styles/header.scss';
import 'minireset.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const ogImage = await fetchOpenGraphImage();
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#1c2e4a" />
        <meta name="description" content="Mario Jiménez' portfolio" />
        <meta property="og:description" content="Mario Jiménez' portfolio" />
        <meta property="og:url" content="https://marioj.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </head>
      <body className={styles.root}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
