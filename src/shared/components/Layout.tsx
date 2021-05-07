import React from 'react';
import Head from 'next/head';
import Header from "./header/header";
import Footer from "./footer/footer";
import styles from "../../../src/core/home/components/homeComponent/home.module.scss";
export const siteTitle = 'Next.js Sample Website'

interface Pro {
  children: JSX.Element
}
export default function Layout(props: Pro ) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="weather"
          content="Weather site"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Weather Style</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
