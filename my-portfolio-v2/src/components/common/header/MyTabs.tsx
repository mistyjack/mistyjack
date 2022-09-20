import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import CustomLink from "../CustomLink";

import { useScrollYPosition } from "react-use-scroll-position";
import { MyContext } from "../../../../pages/_app";
import { ContextState } from "../../types/CommonProps";
import styles from "./Header.module.css";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyTabs: React.FC = () => {
  const scroll_extent = useScrollYPosition();
  const myState = useContext<ContextState | null>(MyContext);
  const [value, setValue] = useState(0);
  const router = useRouter().asPath;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const nav = 86;
    if (myState?.state) {
      if (scroll_extent < myState.state.about - nav) {
        setValue(0);
      } else if (
        scroll_extent >= myState.state.about - nav &&
        scroll_extent < myState.state.service - nav
      ) {
        setValue(1);
      } else if (
        scroll_extent >= myState.state.service - nav &&
        scroll_extent < myState.state.portfolio - nav
      ) {
        setValue(2);
      } else {
        setValue(3);
      }
    }
  }, [scroll_extent, myState?.state]);

  useEffect(() => {
    switch (router) {
      case "/#home":
        setValue(0);
        break;
      case "/#about":
        setValue(1);
        break;
      case "/#experience":
        setValue(2);
        break;
      case "/#portfolio":
        setValue(3);
        break;
    }
  }, [router]);

  return (
    <Tabs
      TabIndicatorProps={{ style: { display: "none" } }}
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      {["Home", "About", "Experience", "Portfolio"].map((title, index) => (
        <Tab
          sx={{ color: "text.primary" }}
          className={styles.tabs}
          LinkComponent={CustomLink}
          href={`/#${title.toLowerCase()}`}
          key={`${title}-${index}`}
          label={title}
          {...a11yProps(index)}
          disableRipple
        />
      ))}
    </Tabs>
  );
};

export default MyTabs;
