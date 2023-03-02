import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const theme = useTheme();

  return (
    <Box
      sx={{
        ".css-1u3bzj6-MuiFormControl-root-MuiTextField-root": { width: "100%" },
        ".css-1363hiw-MuiInputBase-root-MuiOutlinedInput-root": {
          height: theme.spacing(5),
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: "تاریخ تولد",
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}
