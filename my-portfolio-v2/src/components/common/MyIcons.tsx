import Avatar from "@mui/material/Avatar";
import CustomLink from "./CustomLink";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const MyIcons: React.FC = () => {
  return (
    <>
      <Avatar
        component={CustomLink}
        href="https://wa.me/qr/56MY64WYPTSIL1"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
      >
        <WhatsAppIcon color="secondary" />
      </Avatar>
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
    </>
  );
};

export default MyIcons;
