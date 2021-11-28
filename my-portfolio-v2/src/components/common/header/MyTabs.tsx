import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import CustomLink from "../CustomLink";

import styles from "./Header.module.css";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const router = useRouter().asPath;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
      case "/#blog":
        setValue(4);
        break;
      case "/#contact":
        setValue(5);
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
      {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
        (title, index) => (
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
        )
      )}
    </Tabs>
  );
};

export default MyTabs;
