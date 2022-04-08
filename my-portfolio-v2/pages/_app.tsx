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
import { createContext, useReducer } from "react";
import {
  Action,
  ActionKind,
  ContextState,
  PositionState,
} from "../src/components/types/CommonProps";

export const MyContext = createContext<ContextState | null>(null);

const initialState = {
  about: 0,
  freelance: 0,
  portfolio: 0,
  service: 0,
};

const reducer = (state: PositionState, action: Action) => {
  switch (action.type) {
    case ActionKind.SetAbout:
      return {
        ...state,
        about: action.payload,
      };
      break;
    case ActionKind.SetFreelance:
      return {
        ...state,
        freelance: action.payload,
      };
      break;
    case ActionKind.SetPortfolio:
      return {
        ...state,
        portfolio: action.payload,
      };
      break;
    case ActionKind.SetService:
      return {
        ...state,
        service: action.payload,
      };
      break;
    default:
      return state;
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(typeof window !== "undefined" ? window.location.hostname : null)

  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{ state, dispatch }}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MyContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
