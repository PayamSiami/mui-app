import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  placeholder: string;
};

export default function Input(props: Props) {
  const { placeholder } = props;
  const theme = useTheme();

  return (
    <TextField
      sx={{
        ".css-nrk0c3-MuiInputBase-root-MuiOutlinedInput-root": {
          height: theme.spacing(5),
        },
      }}
      fullWidth
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
    />
  );
}
