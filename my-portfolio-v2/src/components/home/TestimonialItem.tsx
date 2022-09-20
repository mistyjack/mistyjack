import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createSvgIcon, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { FC } from "react";
import { TestimonialItemProps } from "../types/HomeProps";

const QuoteIcon = createSvgIcon(
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="quote-left"
    className="svg-inline--fa fa-quote-left fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
    ></path>
  </svg>,
  "Quote"
);

const TestimonialItem: FC<TestimonialItemProps> = ({
  avatar,
  content,
  name,
  position,
  link
}) => {
  return (
    <blockquote>
      <QuoteIcon />
      <Avatar
        sx={{ my: 5, mx: "auto", height: 120, width: 120 }}
        alt={name}
        src={avatar}
      />
      <Typography
        sx={{ fontSize: "18px", fontWeight: 600, fontStyle: "italic" }}
        variant="body1"
      >
        {content}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "14px", mt: 4 }}>
        {name} {Boolean(link) && <>&nbsp;&nbsp;<a href={link} target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='small' /></a></>}
      </Typography>
      {Boolean(position) && <Typography variant="body1" sx={{ fontSize: "14px", mb: 7 }}>
        {position}
      </Typography>}
    </blockquote>
  );
};

export default TestimonialItem;
