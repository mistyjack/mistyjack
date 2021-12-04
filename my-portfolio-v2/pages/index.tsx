import type { NextPage } from "next";
import Head from "next/head";
import Section1 from "../src/components/home/Section1";
import About from "../src/components/home/About";
import Services from "../src/components/home/Services";
import Freelance from "../src/components/home/Freelance";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mustafa Oladepo | Profile</title>
        <meta
          name="description"
          key="description"
          content="Portfolio of Mustafa Oladepo"
        />
        <meta
          property="og:title"
          content="Portfolio | Mustafa Oladepo"
          key="og:title"
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://ik.imagekit.io/7wpxe2myx/Mistyjack/Logo_Asset_3_vIR3LJ6UN.png"
        />
      </Head>

      <main>
        <Section1 />
        <About />
        <Services />
        <Freelance />
      </main>
    </div>
  );
};

export default Home;
