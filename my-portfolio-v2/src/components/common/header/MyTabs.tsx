import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import CustomLink from "../CustomLink";

import styles from "./Header.module.css";
import { useScrollYPosition } from "react-use-scroll-position";
import { MyContext } from "../../../../pages/_app";
import { ContextState } from "../../types/CommonProps";

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
    if (myState?.state) {
      if (scroll_extent < myState.state.about) {
        setValue(0);
      } else if (
        scroll_extent >= myState.state.about &&
        scroll_extent < myState.state.service
      ) {
        setValue(1);
      } else if (
        scroll_extent >= myState.state.service &&
        scroll_extent < myState.state.portfolio
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
      case "/#services":
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
      {["Home", "About", "Services", "Portfolio"].map((title, index) => (
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
