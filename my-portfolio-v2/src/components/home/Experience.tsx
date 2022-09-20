import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BigA, Buyasap, Jufopay } from "../icons";

import clsx from "clsx";
import { useContext, useEffect, useRef, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import { MyContext } from "../../../pages/_app";
import { ActionKind, ContextState } from "../types/CommonProps";
import ExperienceItem from "./ExperienceItem";
import styles from "./Home.module.css";

const bptech = "Business Process Technologies";
const linkedIn = "https://www.linkedin.com/in/mustafa-oladepo-51660772/details/experience"

const serviceContent = [
  {
    title: "Big A",
    content:
      "Built and maintained a multi-vendor e-commerce solution that bridges the gap between farmers and consumers.",
    icon: <BigA />,
    period: "June 2021 - Dec 2021",
    skills: "Next.js · JavaScript · TypeScript · Amazon Web Services (AWS) · Redux.js · NestJS",
    subTitle: bptech,
    link: "https://commerce.biga.africa"
  },
  {
    title: "Jufopay",
    content:
      "Maintaining a fintech solution used by thousands of Nigerians alongside a team of engineers, designers and product managers.",
    icon: <Jufopay />,
    period: "June 2021 - Present",
    skills: "Next.js · Node.js · JavaScript · TypeScript · Amazon Web Services (AWS)",
    subTitle: bptech,
    link: "https://www.jufopay.com"
  },
  {
    title: "Aflysense",
    content:
      "Building the backend that powers an adoptable affiliate marketing solution.",
    icon: <TrendingUpIcon sx={{ color: "primary.light" }} fontSize="large" />,
    period: "May 2022 - Present",
    skills: "Node.js · TypeScript · Amazon Dynamodb · Amazon SQS · Microservices · AWS Lambda · AWS CloudFormation · AWS Cognito · AWS EventBridge",
    subTitle: bptech,
    link: linkedIn
  },
  {
    title: "BuyAsap",
    content:
      "Built and maintained a multi-vendor e-commerce solution.",
    icon: <Buyasap />,
    period: "Nov 2021 - May 2022",
    skills: "Next.js · JavaScript · TypeScript · Amazon Web Services (AWS) · Redux.js · NestJS",
    subTitle: bptech,
    link: "https://www.buyasap.net"
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
      className={clsx(styles.services_background)}
      id="experience"
    >
      <Box sx={{ py: 10, color: "primary.contrastText" }}>
        <Container maxWidth="lg">
          <Fade in={fadeIn} timeout={1000}>
            <Box sx={{ textAlign: "center", maxWidth: 570, mx: "auto", mb: 5 }}>
              <Typography variant="h2" gutterBottom>
                Experience
              </Typography>
            </Box>
          </Fade>

          <Grid spacing={3} container>
            {serviceContent.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ExperienceItem
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  index={index}
                  fadeIn={fadeIn}
                  period={item.period}
                  link={item.link}
                  subTitle={item.subTitle}
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
