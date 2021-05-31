import { cloneElement, Fragment, useEffect, useState } from "react";
import Link from "./Link";
import { useRouter } from "next/router";
import { useScrollYPosition } from "react-use-scroll-position";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CssBaseline from "@material-ui/core/CssBaseline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    tabs: {
      width: "100%",
      margin: "auto"
    },
    tab: {
      textTransform: "none",
      color: theme.palette.secondary.main,
      fontWeight: 600,
      flexGrow: 1
    },
    list: {
      marginTop: 60,
      width: "auto",
      marginLeft: "auto",
      marginRight: "auto"
    },
    listItem: {
      textAlign: "center",
      marginBottom: 66
    },
    closeButton: {
      position: "absolute",
      top: 12,
      right: 40
    },
    backToTop: {
      position: "fixed",
      zIndex: 1000,
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`
  };
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector("#home");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.backToTop}>
        {children}
      </div>
    </Zoom>
  );
}

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 2 : 0,
    position: trigger ? "fixed" : "absolute"
  });
}

const Header = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const matches = useMediaQuery("(min-width:600px)");
  const router = useRouter().asPath;
  const scrollY = useScrollYPosition();

  let screenHeight;
  if (typeof window !== "undefined") {
    screenHeight = 0.8 * window.screen.height;
  }

  useEffect(() => {
    if (scrollY < screenHeight) {
      setValue(0);
    } else if (scrollY >= screenHeight && scrollY < 2 * screenHeight) {
      setValue(1);
    } else if (scrollY >= 2 * screenHeight && scrollY < 3 * screenHeight) {
      setValue(2);
    } else if (scrollY >= 3 * screenHeight && scrollY <= 4 * screenHeight) {
      setValue(3);
    }
  }, [scrollY]);

  useEffect(() => {
    switch (router) {
      case "/#home":
        setValue(0);
        break;
      case "/#skills":
        setValue(1);
        break;
      case "/#projects":
        setValue(2);
        break;
      case "/#get-in-touch":
        setValue(3);
        break;
    }
  }, [router]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tab = (
    <Fragment>
      <Tabs className={classes.tabs} variant={matches ? "fullWidth" : "scrollable"} scrollButtons="auto" value={value} onChange={handleChange} aria-label="scrollable auto tabs example">
        <Tab className={classes.tab} label="Home" component={Link} href="/#home" {...a11yProps(0)} />
        <Tab className={classes.tab} label="Skills" component={Link} href="/#skills" {...a11yProps(1)} />
        <Tab className={classes.tab} label="Projects" component={Link} href="/#projects" {...a11yProps(2)} />
        <Tab className={classes.tab} label="Get in touch" component={Link} href="/#get-in-touch" {...a11yProps(3)} />
      </Tabs>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="transparent" position="fixed" elevation={0}>
          <Toolbar>{tab}</Toolbar>
        </AppBar>
      </ElevationScroll>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Header;
