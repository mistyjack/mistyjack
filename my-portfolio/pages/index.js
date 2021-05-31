import Head from "next/head";
import { Fragment } from "react";
import Contact from "../src/page-sections/Contact";
import Landing from "../src/page-sections/Landing";
import Projects from "../src/page-sections/Projects";
import Skills from "../src/page-sections/Skills";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mustafa Oladepo | Portfolio</title>
        <meta name="description" key="description" content="Portfolio of Mustafa Oladepo" />
        <meta property="og:title" content="Portfolio | Mustafa Oladepo" key="og:title" />
        <meta property="og:image" key="og:image" content="https://ik.imagekit.io/7wpxe2myx/Mistyjack/passport_XsU6P_Zke.png"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ scrollBehavior: "smooth" }}>
        <Landing />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </Fragment>
  );
}
