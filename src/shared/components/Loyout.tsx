import React from 'react';
import Head from 'next/head';
import Header from "./header/header";
import Footer from "./footer/footer";

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Weather Style</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
