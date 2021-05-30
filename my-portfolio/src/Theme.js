import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      red: "#DA4167"
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
      color: "#DA4167"
    },
    h4: {
      color: "#083D77"
    }
  }
});

export default theme;
