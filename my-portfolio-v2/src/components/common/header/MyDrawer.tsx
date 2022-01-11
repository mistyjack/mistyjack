import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Stack from "@mui/material/Stack";

import { useState } from "react";
import CustomLink from "../CustomLink";
import MyIcons from "../MyIcons";

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[500] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const MyDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            bottom: -55,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            backgroundColor: "#fff",
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%, rgba(255,255,255,1) 0%, rgba(235,235,211,1) 90% )",
          }}
        >
          <Puller />
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ p: 2, color: "text.secondary" }}
          >
            My Portfolio
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <List sx={{ mt: 6, mb: 3 }}>
            {["Home", "About", "Services", "Portfolio"].map((item, index) => (
              <ListItem key={`${item}-${index}`} disablePadding>
                <ListItemButton
                  component={CustomLink}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText sx={{ textAlign: "center" }} primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Stack justifyContent={"center"} direction="row" spacing={2}>
            <MyIcons />
          </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default MyDrawer;
