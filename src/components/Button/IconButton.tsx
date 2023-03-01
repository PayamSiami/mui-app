import * as React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function IconButton() {
  return (
    <MuiIconButton
      color="primary"
      aria-label="upload picture"
      component="label"
    >
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </MuiIconButton>
  );
}
