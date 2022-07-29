// Mui imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Zoom from "@mui/material/Zoom";

// Other imports
import { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import CustomLink from "../common/CustomLink";

const Hero = () => {
  const scroll_extent = useScrollYPosition();
  const [backgroundImage, setBackgroundImage] = useState(
    `url("https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/background_jk_WqyZUUU.png?updatedAt=1641944691899") 50% 0% / cover`
  );
  const matches = useMediaQuery("(min-width: 900px)");

  useEffect(() => {
    if (scroll_extent < 900 && matches)
      setBackgroundImage(
        `url("https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/background_jk_WqyZUUU.png?updatedAt=1641944691899") 50% ${
          0.5 * scroll_extent
        }px / cover`
      );
  }, [scroll_extent, matches]);

  return (
    <section id="home">
      <Box
        sx={{
          height: "100vh",
          background: { md: backgroundImage },
          backgroundImage: {
            xs: `url("https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/backgroundSmall_qzvxGlExR.png?updatedAt=1641944688946")`,
            md: "",
          },
          backgroundColor: "#EBEBD3",
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
        <Container maxWidth="lg">
          <Zoom in={true} timeout={1500}>
            <Box sx={{ maxWidth: 470, ml: { md: "auto" } }}>
              <Typography variant="h2" color="textSecondary" gutterBottom>
                Hi, my name is Mustafa Oladepo
              </Typography>
              <Typography sx={{ mb: 3 }} variant="body2">
                I am a full-stack developer with a demonstrated history of designing, developing, and maintaining small and enterprise-level applications using various development technologies and methodologies.
              </Typography>
              <Button
                component={CustomLink}
                href="#about"
                variant="contained"
                color="primary"
              >
                About Me
              </Button>
            </Box>
          </Zoom>
        </Container>
      </Box>
    </section>
  );
};

export default Hero;
