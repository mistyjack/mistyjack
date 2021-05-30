import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/styles";
import { Fragment } from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Theme from "../src/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
