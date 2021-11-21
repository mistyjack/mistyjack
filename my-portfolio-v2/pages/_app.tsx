// Global file imports
import "../styles/globals.css";

// Next js imports
import type { AppProps } from "next/app";

// Mui imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// My components
import theme from "../src/Theme";
import Header from "../src/components/common/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
