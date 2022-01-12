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
        aria-label="Drop a message on WhatsApp"
        rel="noopener noreferrer"
        sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
      >
        <WhatsAppIcon color="secondary" />
      </Avatar>
      <Avatar
        component={CustomLink}
        href="https://www.facebook.com/oladepomustafa"
        target="_blank"
        aria-label="Drop a message on Facebook"
        rel="noopener noreferrer"
        sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
      >
        <FacebookIcon fontSize="small" color="secondary" />
      </Avatar>
      <Avatar
        component={CustomLink}
        href="https://twitter.com/_mistyjack"
        target="_blank"
        aria-label="Drop a message on Twitter"
        rel="noopener noreferrer"
        sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
      >
        <TwitterIcon fontSize="small" color="secondary" />
      </Avatar>
      <Avatar
        component={CustomLink}
        href="https://www.linkedin.com/in/mustafa-oladepo-51660772/"
        target="_blank"
        aria-label="Drop a message on LinkedIn"
        rel="noopener noreferrer"
        sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
      >
        <LinkedInIcon fontSize="small" color="secondary" />
      </Avatar>
      <Avatar
        component={CustomLink}
        href="https://github.com/mistyjack"
        target="_blank"
        aria-label="Explore my Github"
        rel="noopener noreferrer"
        sx={{ bgcolor: "primary.main", height: 34, width: 34 }}
      >
        <GithubIcon fontSize="small" color="secondary" />
      </Avatar>
    </>
  );
};

export default MyIcons;
