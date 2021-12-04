import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Freelance = () => {
  return (
    <section id="freelance" className="page-section">
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
