import ImageAvatar from "../components/avatar/Avatar";
import { Box, Grid } from "@mui/material";
import DatePicker from "../components/datePicker/DatePicker";
import Input from "../components/input/Input";
import Autocomplete from "../components/Autocomplete/Autocomplete";
import Checkboxes from "../components/Checkbox/Checkbox";
import Button from "../components/Button/Button";

export default function Profile() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box>
          <Box padding={2}>
            <ImageAvatar sx={{ width: 104, height: 104 }} />
          </Box>
          <Box mb={1}>
            <Input placeholder="نام خود را وارد کنید."/>
          </Box>
          <Box mb={1}>
            <DatePicker />
          </Box>
          <Box mb={1}>
            <Autocomplete />
          </Box>
          <Grid item xs={6}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Checkboxes label="مجرد" />
              <Checkboxes label="متاهل" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Checkboxes label="خانه دار" />
              <Checkboxes label="شاغل" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Button title="ذخیره اطلاعات" variant="contained" />
              <Button title="انصراف" variant="outlined" />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
