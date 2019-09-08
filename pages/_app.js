import React from "react";
import App from "next/app";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";

import "./_app.css";

class SchnelleWebsite extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          {/*
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
          <link rel="manifest" href="/static/manifest.json" />
          {/*
    
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/static/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-145099313-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());

  	gtag('config', 'UA-145099313-1');`
            }}
          />
          <title>Schnelle Brillen - heute schon gesprintet?</title>
        </Head>
        <PageWrapper Component={Component} {...pageProps} />
      </>
    );
  }
}

export default SchnelleWebsite;
