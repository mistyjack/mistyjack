import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import { TabPanelProps } from "../types/HomeProps";
import PortfolioItem from "./PortfolioItem";

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
  "E-COMMERCE",
];

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section id="portfolio" className="page-section">
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

        <Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="portfolio tabs"
              sx={{
                "& .MuiTabs-flexContainer": {
                  justifyContent: { md: "center" },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .Mui-selected": {
                  bgcolor: "primary.main",
                  color: "white !important",
                  fontFamily: "Nunito",
                },
              }}
            >
              {projects_categories.map((item, index) => (
                <Tab
                  key={index}
                  sx={{
                    borderRadius: "15px",
                    minHeight: 0,
                    py: "5px",
                    mx: 1,
                  }}
                  label={item}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>

          {projects_categories.map((item, index) => (
            <TabPanel value={value} index={index}>
              <PortfolioItem />
            </TabPanel>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Portfolio;
