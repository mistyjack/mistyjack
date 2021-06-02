import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      main: "#083D77"
    },
    secondary: {
      main: "#EBEBD3"
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    h3: {
      color: "#083D77",
      fontWeight: 700
    },
    h4: {
      color: "#083D77"
    },
    h5: {
      color: "#083D77",
      fontSize: "1rem",
      fontWeight: "400"
    }
  }
});

export default theme;
