// React imports
import { cloneElement } from "react";

// Mui imports
import useScrollTrigger from "@mui/material/useScrollTrigger";

// My components imports
import { HeaderProps } from "../../types/CommonProps";

const ElevationScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 2 : 0,
    color: trigger ? "" : "transparent",
    style: {
      backgroundImage: trigger
        ? "radial-gradient( circle farthest-corner at 10% 20%, rgba(255,255,255,1) 0%, rgba(235,235,211,1) 90% )"
        : "",
    },
  });
};

export default ElevationScroll;
