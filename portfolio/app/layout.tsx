import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { fetchOpenGraphImage } from '../lib/fetch-opengraph-image';
import Header from '../components/Header';
import styles from '../styles/layout.module.scss';
import '../styles/header.scss';
import 'minireset.css';

export const viewport: Viewport = {
  themeColor: '#1c2e4a',
  colorScheme: 'dark',
};

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = await fetchOpenGraphImage();
  return {
    title: 'Mario Jiménez',
    description: "Mario Jiménez' portfolio",
    openGraph: {
      url: 'https://marioj.dev/',
      images: [{ url: ogImage }],
      type: 'profile',
    },
  };
}

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.root}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
