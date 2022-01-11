import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import Grid from "@mui/material/Grid";
import LanguageIcon from "@mui/icons-material/Language";
import LaptopIcon from "@mui/icons-material/Laptop";
import DevicesIcon from "@mui/icons-material/Devices";
import ApiIcon from "@mui/icons-material/Api";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import clsx from "clsx";
import styles from "./Home.module.css";
import ServiceItem from "./ServiceItem";
import { useContext, useEffect, useRef } from "react";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";

const serviceContent = [
  {
    title: "Website Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: <LanguageIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Front-end Web Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: <LaptopIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Back-end Web Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: <ApiIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Full-stack Web Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: <DevicesIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Saas",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: (
      <IntegrationInstructionsOutlinedIcon
        sx={{ color: "primary.light" }}
        fontSize="large"
      />
    ),
  },
  {
    title: "E-commerce",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: (
      <AddShoppingCartIcon sx={{ color: "primary.light" }} fontSize="large" />
    ),
  },
];

const Services = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetService,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  return (
    <section
      ref={sectionArea}
      className={clsx(styles.services_background, "page-section")}
      id="services"
    >
      <Box sx={{ py: 10, color: "primary.contrastText" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 570, mx: "auto", mb: 5 }}>
            <Typography variant="h2" gutterBottom>
              Services
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Grid spacing={3} container>
            {serviceContent.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceItem
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Services;
