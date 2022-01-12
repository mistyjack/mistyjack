import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import MyIcons from "./MyIcons";

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
              <MyIcons />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
