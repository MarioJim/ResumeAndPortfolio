import React from 'react';
import { AppProps } from 'next/app';
import 'minireset.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
