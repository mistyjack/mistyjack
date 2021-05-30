import Head from "next/head";
import { Fragment } from "react";
import Landing from "../src/page-sections/Landing";
import Projects from "../src/page-sections/Projects";
import Skills from "../src/page-sections/Skills";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mustafa Oladepo | Portfolio</title>
        <meta name="description" content="Portfolio of Mustafa Oladepo (nickname mistyjack)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
        <Skills />
        <Projects />
      </main>
    </Fragment>
  );
}
