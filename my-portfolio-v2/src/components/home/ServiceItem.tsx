import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { FC } from "react";
import { ServiceItemProps } from "../types/HomeProps";

const ServiceItem: FC<ServiceItemProps> = ({ icon, title, content }) => {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stack direction="row" spacing={2}>
        <Box>
          <Avatar
            sx={{
              bgcolor: "transparent",
              border: "1px solid #4767a6",
              width: 56,
              height: 56,
            }}
            alt={title}
          >
            {icon}
          </Avatar>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.875rem" },
              fontWeight: 300,
              lineHeight: "34.5px",
            }}
            variant="h3"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: { sm: "1.125rem" }, lineHeight: 1.65 }}
            variant="body1"
          >
            {content}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ServiceItem;
