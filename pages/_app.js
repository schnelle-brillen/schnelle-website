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
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link href="/static/fonts/Facon.otf" rel="stylesheet" />
          <meta
            name="description"
            content="Schnelle Brillen.de gibt dir die Auswahl an Brillen, die dich so richtig beschläunigen.  Beim Raven, Chillen oder Sport machen ist eine schnelle Brille ein muss."
            class="next-head"
          ></meta>
          <meta http-equiv="language" content="de"></meta>
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
          <title>Schnelle Brillen - erhöhe die Geschwindigkeit!</title>
        </Head>
        <PageWrapper Component={Component} {...pageProps} />
      </>
    );
  }
}

export default SchnelleWebsite;
