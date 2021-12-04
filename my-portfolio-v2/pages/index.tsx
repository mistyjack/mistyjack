import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../src/components/home/hero";
import About from "../src/components/home/About";
import Services from "../src/components/home/Services";
import Freelance from "../src/components/home/Freelance";
import Testimonials from "../src/components/home/Testimonials";
import Portfolio from "../src/components/home/Portfolio";

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
        <Hero />
        <About />
        <Services />
        <Freelance />
        <Testimonials />
        <Portfolio />
      </main>
    </div>
  );
};

export default Home;
