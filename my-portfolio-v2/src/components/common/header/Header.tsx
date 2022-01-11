import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ElevationScroll from "./ElevationScroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MyTabs from "./MyTabs";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomLink from "../CustomLink";
import MyDrawer from "./MyDrawer";
import MyIcons from "../MyIcons";

const Header: React.FC = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  if (matches) {
    return (
      <ElevationScroll>
        <AppBar
          sx={{
            "& .MuiPaper-elevation2": {
              backgroundColor: "red !important",
            },
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: "86px",
                  fontFamily: "Poppins",
                }}
              >
                Mustafa Oladepo
              </Typography>

              <MyTabs />

              <Box>
                <Stack direction="row" spacing={2}>
                  <MyIcons />
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    );
  } else {
    return <MyDrawer />;
  }
};

export default Header;
