import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutWrapper from 'components/LayoutWrapper';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </React.Fragment>
  );
}

export default MyApp;
