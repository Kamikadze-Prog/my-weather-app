import React from "react";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../../core/home/components/homeComponent/home.module.scss";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }: JSX.ElementChildrenAttribute) {
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
  );
}
