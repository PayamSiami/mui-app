import * as React from "react";
import { styled } from "@mui/material/styles";

const CustomInput = styled("input")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  minHeight: theme.spacing(5),
  padding: theme.spacing(1, 1),
  borderColor: theme.palette.primary.dark,
  color: theme.palette.primary.dark,
  borderWidth: 1,
  "&:focus": {
    borderColor: theme.palette.primary.dark,
  },
  width: "100%",
}));

export default function Input() {
  return <CustomInput placeholder="نام خود را وارد کنید." />;
}
