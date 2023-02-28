import ImageAvatar from "../components/avatar/Avatar";
import { Box, Grid } from "@mui/material";
import DatePicker from "../components/datePicker/DatePicker";
import Input from "../components/input/Input";

export default function Profile() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box>
          <Box
            sx={{
              padding: 2,
            }}
          >
            <ImageAvatar sx={{ width: 104, height: 104 }} />
          </Box>
          <Input />
          <DatePicker />
        </Box>
      </Grid>
    </Grid>
  );
}
