import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Grow from "@mui/material/Grow";

import Image from "next/image";
import styles from "./Home.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#083d77" : "#4767a6",
  },
}));

const topSkills = [
  { title: "JavaScript", strength: 93 },
  { title: "TypeScript", strength: 80 },
  { title: "React.js", strength: 96 },
  { title: "Next.js", strength: 88 },
  { title: "Nest.js", strength: 75 },
  { title: "Node.js", strength: 82 },
];

const otherSkills = [
  "Material-UI",
  "Bootstrap",
  "TailwindCSS",
  "Express.js",
  "Git",
  "AWS",
  "BitGo SDK",
  "Redux",
  "Jest",
  "Testing-Library",
  "MongoDB",
  "REST APIs",
  "Docker",
  "Kubernetes",
  "Slack",
  "Trello",
  "Netlify",
  "Python",
  "Bash",
  "XML",
  "Webpack",
  "Heroku",
  "OAuth",
  "GIMP",
  "Inkscape",
];

const About = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetAbout,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  return (
    <section ref={sectionArea} id="about" className="page-section">
      <Container maxWidth="lg">
        <Grid justifyContent="space-between" alignItems="center" container>
          <Grid xs={12} md={6} item>
            <Box
              sx={{
                width: {
                  md: "100%",
                  xs: "100%",
                },
                maxWidth: 570,
                position: "relative",
                mx: {
                  xs: "auto",
                  md: 0,
                },
              }}
            >
              <Image
                alt="Picture with grey background"
                src="https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/misc1_IODZOFwis.jpg?updatedAt=1641944688544"
                layout="responsive"
                width={1080}
                height={720}
                className={styles.positioned_img}
              />
              <Box
                sx={{
                  width: "40%",
                  position: "absolute",
                  right: { md: "-10%", xs: -12 },
                  bottom: { md: "-10%", xs: -9 },
                }}
              >
                <Image
                  alt="Picture with grey background"
                  src="https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/misc2_cfxfYMLjnR.jpg?updatedAt=1641944688636"
                  layout="responsive"
                  width={800}
                  height={533}
                  className={styles.positioned_img}
                />
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6} item>
            <Box
              sx={{
                ml: {
                  md: 12,
                },
              }}
            >
              <Typography
                sx={{ mb: 2, mt: { xs: 4, md: 0 } }}
                variant="h2"
                color="textSecondary"
              >
                About <span className={styles.primary_text}>Me</span>
              </Typography>
              <Typography sx={{ mb: 3 }} variant="body1">
                I have always enjoyed problem-solving, and it is one of the
                reasons why I picked up programming. I have been opportune to
                work on several projects in their entirety from the initiation
                stage up to the completion. These have built up my expertise in
                the field of full-stack web development. Some of these projects
                include e-commerce websites, admin/user dashboards, bitcoin
                trading platforms, company websites and user portfolios.
              </Typography>
              <Button
                onClick={() => setChecked((prev) => !prev)}
                variant="outlined"
                color="primary"
                size="large"
              >
                Show My Skills
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grow in={checked}>
          <div style={{ height: checked ? "auto" : 0 }}>
            <Box sx={{ mt: 10, display: checked ? "block" : "none" }}>
              <Grid
                justifyContent="space-between"
                spacing={3}
                alignItems="center"
                container
              >
                {topSkills.map((item, index) => (
                  <Grid
                    key={`${item.title}-${index}`}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <Box>
                      <Typography sx={{ mb: 1 }} variant="h3">
                        {item.title}
                      </Typography>
                      <BorderLinearProgress
                        variant="determinate"
                        value={item.strength}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Grid spacing={2} container>
                {otherSkills.map((item, index) => (
                  <Grid key={`${item}-${index}`} item>
                    <Chip label={item} variant="outlined" color="primary" />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Grow>
      </Container>
    </section>
  );
};

export default About;
