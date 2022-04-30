import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutWrapper from 'components/LayoutWrapper';
import React from 'react';
import Head from 'next/head';
import Analytics from 'components/Analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </React.Fragment>
  );
}

export default MyApp;
