import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";

import styles from "./Home.module.css";

const Section2 = () => {
  return (
    <section id="about" className="page-section">
      <Box>
        <Container maxWidth="lg">
          <Grid justifyContent="space-between" alignItems="center" container>
            <Grid xs={12} md={6} item>
              <Box
                sx={{
                  width: {
                    md: "100%",
                    xs: "85%",
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
                  src="/misc1.jpg"
                  layout="responsive"
                  width={800}
                  height={533}
                  className={styles.positioned_img}
                />
                <Box
                  sx={{
                    width: "40%",
                    position: "absolute",
                    right: "-10%",
                    bottom: "-10%",
                  }}
                >
                  <Image
                    alt="Picture with grey background"
                    src="/misc2.jpg"
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
                <Typography sx={{ mb: 2 }} variant="h2" color="textSecondary">
                  About <span className={styles.primary_text}>Me</span>
                </Typography>
                <Typography sx={{ mb: 3 }} variant="body1">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </Typography>
                <Button variant="outlined" color="primary" size="large">
                  Show My Skills
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Section2;
