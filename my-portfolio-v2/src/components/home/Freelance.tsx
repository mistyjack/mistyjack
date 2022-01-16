import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext, useEffect, useRef, useState } from "react";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";
import { useScrollYPosition } from "react-use-scroll-position";
import Fade from "@mui/material/Fade";

const Freelance = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);
  const [fadeIn, setFadeIn] = useState(false);
  const scroll_extent = useScrollYPosition();

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetFreelance,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  useEffect(() => {
    if (
      !fadeIn &&
      typeof window !== "undefined" &&
      myState &&
      myState.state.freelance &&
      scroll_extent >= myState.state.freelance + 86 - window.innerHeight
    ) {
      setFadeIn(true);
    }
  }, [scroll_extent, myState?.state.freelance, fadeIn]);

  return (
    <section ref={sectionArea} id="freelance" className="page-section">
      <Container sx={{ textAlign: "center" }} maxWidth="lg">
        <Fade in={fadeIn} timeout={1000}>
          <Typography variant="h2" gutterBottom>
            I Am Available For Freelance
          </Typography>
        </Fade>
        <Fade in={fadeIn} timeout={1000} style={{ transitionDelay: "500ms" }}>
          <a href="mailto:oladepomustafa@yahoo.com">
            <Button variant="contained" color="primary">
              Get in Touch
            </Button>
          </a>
        </Fade>
      </Container>
    </section>
  );
};

export default Freelance;
