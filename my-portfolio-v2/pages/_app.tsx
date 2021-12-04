// Global file imports
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

// Next js imports
import type { AppProps } from "next/app";

// Mui imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// My components
import theme from "../src/Theme";
import Header from "../src/components/common/header/Header";
import Footer from "../src/components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
