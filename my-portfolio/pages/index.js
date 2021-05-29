import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment className={styles.container}>
      <Head>
        <title>Mustafa Oladepo | Portfolio</title>
        <meta name="description" content="Portfolio of Mustafa Oladepo (nickname mistyjack)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello Misty</main>
    </Fragment>
  );
}
