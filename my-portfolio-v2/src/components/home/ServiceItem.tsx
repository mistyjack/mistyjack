import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { FC } from "react";
import { ServiceItemProps } from "../types/HomeProps";

const ServiceItem: FC<ServiceItemProps> = ({ icon, title, content }) => {
  return (
    <Box sx={{ maxWidth: 370 }}>
      <Stack direction="row" spacing={2}>
        <Box>
          <Avatar
            sx={{
              bgcolor: "transparent",
              border: "1px solid #4767a6",
              width: 56,
              height: 56,
            }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            {icon}
          </Avatar>
        </Box>
        <Box>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{content}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ServiceItem;
