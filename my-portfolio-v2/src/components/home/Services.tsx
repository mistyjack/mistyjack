import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LanguageIcon from "@mui/icons-material/Language";
import LaptopIcon from "@mui/icons-material/Laptop";
import DevicesIcon from "@mui/icons-material/Devices";
import ApiIcon from "@mui/icons-material/Api";
import Fade from "@mui/material/Fade";

import clsx from "clsx";
import styles from "./Home.module.css";
import ServiceItem from "./ServiceItem";
import { useContext, useEffect, useRef, useState } from "react";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";
import { useScrollYPosition } from "react-use-scroll-position";

const serviceContent = [
  {
    title: "Website Design",
    content:
      "I create visually appealing and professional websites that suit your brand needs.",
    icon: <LanguageIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Front-end Development",
    content:
      "I make efficient use of eminent tools and methodologies to create pixel-perfect user interfaces.",
    icon: <LaptopIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Back-end Development",
    content:
      "I write effective and well-optimized Application Programming Interfaces that power your applications.",
    icon: <ApiIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
  {
    title: "Full-stack Development",
    content:
      "I deliver web applications in their entirety from the initiation stage up to completion.",
    icon: <DevicesIcon sx={{ color: "primary.light" }} fontSize="large" />,
  },
];

const Services = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);
  const [fadeIn, setFadeIn] = useState(false);
  const scroll_extent = useScrollYPosition();

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetService,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  useEffect(() => {
    if (
      !fadeIn &&
      typeof window !== "undefined" &&
      myState &&
      myState.state.service &&
      scroll_extent >= myState.state.service + 86 - window.innerHeight
    ) {
      setFadeIn(true);
    }
  }, [scroll_extent, myState?.state.service, fadeIn]);

  return (
    <section
      ref={sectionArea}
      className={clsx(styles.services_background, "page-section")}
      id="services"
    >
      <Box sx={{ py: 10, color: "primary.contrastText" }}>
        <Container maxWidth="lg">
          <Fade in={fadeIn} timeout={1000}>
            <Box sx={{ textAlign: "center", maxWidth: 570, mx: "auto", mb: 5 }}>
              <Typography variant="h2" gutterBottom>
                Services
              </Typography>
            </Box>
          </Fade>

          <Grid spacing={3} container>
            {serviceContent.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ServiceItem
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  index={index}
                  fadeIn={fadeIn}
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
