import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#EBEBD3",
      red: "#af3856"
    },
    primary: {
      main: "#083D77"
    },
    secondary: {
      main: "#EBEBD3"
    },
    background: {
      default: "#EBEBD3"
    }
  },
  typography: {
    h3: {
      color: "#af3856"
    },
    h4: {
      color: "#083D77"
    },
    h5: {
      color: "#af3856",
      fontSize: "1rem",
      fontWeight: "300"
    }
  }
});

export default theme;
