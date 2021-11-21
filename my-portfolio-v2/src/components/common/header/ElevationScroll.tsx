// React imports
import { cloneElement } from "react";

// Mui imports
import useScrollTrigger from "@mui/material/useScrollTrigger";

// My components imports
import HeaderProps from "../../types/HeaderProps";

const ElevationScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "secondary" : "transparent"
  });
};

export default ElevationScroll;
