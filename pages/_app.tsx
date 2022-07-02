import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Analytics from 'components/Analytics';
import Container from 'components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <Container>
        <Component {...pageProps} />
      </Container>
    </React.Fragment>
  );
}

export default MyApp;
