import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext, useEffect, useRef } from "react";
import { TabPanelProps } from "../types/HomeProps";
import PortfolioItem from "./PortfolioItem";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";

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

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetPortfolio,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  return (
    <section ref={sectionArea} id="portfolio" className="page-section">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{ fontSize: 15 }}
            color="primary"
            variant="h3"
            component="h2"
            gutterBottom
          >
            Portfolio
          </Typography>
          <Typography variant="h2" component="h3">
            I Love What I Do
          </Typography>
        </Box>

        <Box
          sx={{ maxWidth: "820px", mx: "auto", height: 600, overflowY: "auto" }}
        >
          <PortfolioItem />
        </Box>
      </Container>
    </section>
  );
};

export default Portfolio;
