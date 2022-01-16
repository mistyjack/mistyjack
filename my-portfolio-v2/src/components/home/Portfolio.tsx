import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import { useContext, useEffect, useRef, useState } from "react";
import { TabPanelProps } from "../types/HomeProps";
import PortfolioItem from "./PortfolioItem";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";
import { useScrollYPosition } from "react-use-scroll-position";

function a11yProps(index: number) {
  return {
    id: `portfolio-tab-${index}`,
    "aria-controls": `portfolio-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const projects_categories = [
  "ALL PROJECTS",
  "FRONT-END",
  "BACKEND",
  "FULL-STACK",
];

const Portfolio = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);
  const [fadeIn, setFadeIn] = useState(false);
  const scroll_extent = useScrollYPosition();

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetPortfolio,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  useEffect(() => {
    if (
      !fadeIn &&
      typeof window !== "undefined" &&
      myState &&
      myState.state.portfolio &&
      scroll_extent >= myState.state.portfolio + 86 - window.innerHeight
    ) {
      setFadeIn(true);
    }
  }, [scroll_extent, myState?.state.portfolio, fadeIn]);

  return (
    <section ref={sectionArea} id="portfolio" className="page-section">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Fade in={fadeIn} timeout={1000}>
            <Typography
              sx={{ fontSize: 15 }}
              color="primary"
              variant="h3"
              component="h2"
              gutterBottom
            >
              Portfolio
            </Typography>
          </Fade>
          <Fade in={fadeIn} timeout={1500}>
            <Typography variant="h2" component="h3">
              I Love What I Do
            </Typography>
          </Fade>
        </Box>

        <Fade in={fadeIn} timeout={2000}>
          <Box
            sx={{
              maxWidth: "820px",
              mx: "auto",
              height: 600,
              overflowY: "auto",
            }}
          >
            <PortfolioItem />
          </Box>
        </Fade>
      </Container>
    </section>
  );
};

export default Portfolio;
