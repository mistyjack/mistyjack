// Mui imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// Other imports
import { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import CustomLink from "../common/CustomLink";

const Section1 = () => {
  const scroll_extent = useScrollYPosition();
  const [backgroundImage, setBackgroundImage] = useState(
    `url("/background.jpg") 50% 0% / cover`
  );

  useEffect(() => {
    if (scroll_extent < 900)
      setBackgroundImage(
        `url("/background.jpg") 50% ${0.5 * scroll_extent}px / cover`
      );
  }, [scroll_extent]);

  return (
    <section id="home">
      <Box
        sx={{
          height: "100vh",
          background: backgroundImage,
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
          px: {
            md: 10,
          },
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: 470 }}>
          <Container>
            <Typography variant="h2" color="textSecondary" gutterBottom>
              Hi, my name is Mustafa Oladepo
            </Typography>
            <Typography sx={{ mb: 3 }} variant="body2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti. Repellendus harum doloribus repellat, eos facilis rerum.
            </Typography>
            <Button
              component={CustomLink}
              href="#about"
              variant="contained"
              color="primary"
            >
              About Me
            </Button>
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default Section1;
