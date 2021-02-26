import '../styles.module.css'
import React from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  
        <Head>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
        
    
  return <Component {...pageProps} />
}

