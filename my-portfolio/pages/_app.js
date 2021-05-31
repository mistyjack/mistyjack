import "../styles/globals.css";
import "swiper/swiper-bundle.css";
import { ThemeProvider } from "@material-ui/styles";
import { Fragment } from "react";
import Header from "../src/components/Header";
import Theme from "../src/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
