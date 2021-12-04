import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import CustomLink from "./CustomLink";
import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const Footer = () => {
  return (
    <section
      style={{
        backgroundColor: "#515C6A",
        color: "#fff",
        padding: "40px 0",
      }}
      id="footer"
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" justifyContent="space-between" container>
          <Grid xs={12} sm={6} item>
            <Typography
              sx={{
                mb: { xs: 2, sm: 0 },
                textAlign: { xs: "center", sm: "left" },
              }}
              variant="body1"
            >
              &copy; Copyright 2021 - Mustafa
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} item>
            <Stack
              sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}
              direction="row"
              spacing={2}
            >
              <Avatar
                component={CustomLink}
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
              >
                <FacebookIcon fontSize="small" color="secondary" />
              </Avatar>
              <Avatar
                component={CustomLink}
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
              >
                <TwitterIcon fontSize="small" color="secondary" />
              </Avatar>
              <Avatar
                component={CustomLink}
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
              >
                <LinkedInIcon fontSize="small" color="secondary" />
              </Avatar>
              <Avatar
                component={CustomLink}
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
              >
                <GithubIcon fontSize="small" color="secondary" />
              </Avatar>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
