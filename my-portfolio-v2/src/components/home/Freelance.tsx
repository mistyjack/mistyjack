import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext, useEffect, useRef } from "react";
import { ActionKind, ContextState } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";

const Freelance = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);

  useEffect(() => {
    if (sectionArea.current && myState) {
      myState.dispatch({
        type: ActionKind.SetFreelance,
        payload: sectionArea.current.offsetTop,
      });
    }
  }, [sectionArea, myState?.dispatch]);

  return (
    <section ref={sectionArea} id="freelance" className="page-section">
      <Container sx={{ textAlign: "center" }} maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          I Am Available For Freelance
        </Typography>
        <Button variant="contained" color="primary">
          Hire Me Now
        </Button>
      </Container>
    </section>
  );
};

export default Freelance;
