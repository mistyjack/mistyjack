import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ElevationScroll from "./ElevationScroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MyTabs from "./MyTabs";
import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "../Icons";
import CustomLink from "../CustomLink";

const Header: React.FC = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 24,
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
