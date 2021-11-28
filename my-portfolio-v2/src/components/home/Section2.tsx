import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Section2 = () => {
  return (
    <section>
      <Box>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item>
              <Box>
                <Image
                  alt="Picture with grey background"
                  src="/"
                  layout="fixed"
                  width={700}
                  height={475}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Section2;
