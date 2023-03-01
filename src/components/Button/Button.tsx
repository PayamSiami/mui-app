import * as React from "react";
import { Button as MuiButton } from "@mui/material";

type Props = {
  title: string;
  variant?: "contained" | "outlined" | "text";
};

export default function Button(props: Props) {
  const { title, variant } = props;

  return (
    <MuiButton
      sx={{
        width: 144,
        "& button": { m: 1 },
        "&:hover": {
          backgroundColor: variant !== "contained" ? "none" : "primary.main",
        },
      }}
      variant={variant}
    >
      {title}
    </MuiButton>
  );
}
