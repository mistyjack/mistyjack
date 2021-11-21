import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 52,
      fontWeight: 700,
      letterSpacing: -1,
      lineHeight: "56px"
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: -1,
      lineHeight: "48px"
    },
    h3: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 19,
      fontWeight: 700,
      lineHeight: "22.8px"
    },
    body1: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "27.2px"
    },
    body2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 17,
      fontWeight: 600,
      lineHeight: "28.9px"
    }
  },
  palette: {
    primary: {
      main: "#083d77",
      light: "#4767a6",
      dark: "#00184b"
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#cccccc"
    }
  }
});

export default theme;
