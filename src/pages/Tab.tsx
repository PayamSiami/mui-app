import React from "react";
import VerticalTab from "../components/tab/VerticalTab";
import { Box, Typography } from "@mui/material";
import ImageAvatar from "../components/avatar/Avatar";
import MobileTab from "../components/tab/MobileTab";
import { isMobile } from "react-device-detect";

export default function Tab() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ p: 3 }}>
          <ImageAvatar sx={{ width: 62, height: 62 }} />
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
        {isMobile ? <MobileTab /> : <VerticalTab />}
      </Box>
    </>
  );
}
