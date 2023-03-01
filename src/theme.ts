import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#B0BF24",
      contrastText: "#fff",
      light: "#B0BF24",
      dark: "#3F4254",
    },
    secondary: {
      main: "#19857b",
      contrastText: "#fff",
      light: "#19857b",
      dark: "#00695c",
    },
    error: {
      main: red.A400,
      contrastText: "#fff",
      light: red.A400,
      dark: red.A400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  direction: "rtl",
});

export default theme;
