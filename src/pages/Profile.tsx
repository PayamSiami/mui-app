import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

import {
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  IconButton,
  Input,
} from "../components";

export default function Profile() {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={isSmallScreen ? 12 : 6}>
        <Box
          sx={{
            position: isSmallScreen ? "relative" : "absolute",
            top: isSmallScreen ? 0 : 66,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            alt={"emoji"}
            width={24}
            height={24}
            loading="lazy"
            src={"/images/emoji.png"}
          />
          <Typography variant="subtitle1" gutterBottom mr={1}>
            ویرایش پروفایل
          </Typography>
        </Box>
        <Box padding={2} display={"flex"} justifyContent={"center"}>
          <Avatar sx={{ width: 104, height: 104 }} />
          <Box position={"absolute"} mt={8} ml={8}>
            <IconButton />
          </Box>
        </Box>
        <Box mb={1}>
          <Input placeholder="نام خود را وارد کنید." />
        </Box>
        <Box mb={1}>
          <DatePicker />
        </Box>
        <Box mb={1}>
          <Autocomplete />
        </Box>
        <Grid item xs={isSmallScreen ? 8 : 6}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Checkbox label="مجرد" />
            <Checkbox label="متاهل" />
          </Box>
        </Grid>
        <Grid item xs={isSmallScreen ? 8 : 6}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Checkbox label="خانه دار" />
            <Checkbox label="شاغل" />
          </Box>
        </Grid>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button title="ذخیره اطلاعات" variant="contained" />
          <Button title="انصراف" variant="outlined" />
        </Box>
      </Grid>
    </Grid>
  );
}
