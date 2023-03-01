import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { Avatar, MobileTab, VerticalTab } from "../components";

export default function Tab() {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ p: 3 }}>
          <Avatar sx={{ width: 62, height: 62 }} />
        </Box>
        <Box sx={{ display: "flow-root" }}>
          <Typography variant="h5" gutterBottom>
            سعید صفایی
          </Typography>
          <Typography variant="body2" color="text.secondary">
            بدون اشتراک
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, width: "100%" }}>
        {isSmallScreen ? <MobileTab /> : <VerticalTab />}
      </Box>
    </>
  );
}
