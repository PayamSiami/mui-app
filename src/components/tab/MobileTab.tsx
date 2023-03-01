import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Profile from "../../pages/Profile";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MobileTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        //   variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              0 === value ? theme.palette.primary.light : "transparent",
            color:
              0 === value ? "white !important" : theme.palette.primary.dark,
            borderRadius: 1,
            justifyContent: "flex-start",
            width: "153px",
            border: 0 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<AccountCircleOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="اطلاعات پروفایل"
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              1 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color:
              1 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "153px",
            border: 1 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<ScatterPlotOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="ویژگی‌ها و علاقه‌ها"
          {...a11yProps(1)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              2 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color:
              2 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "153px",
            border: 2 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<TerminalOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="برنامه هفتگی"
          {...a11yProps(2)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              3 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color:
              3 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "153px",
            border: 3 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<FavoriteBorderOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="غذاهای موردعلاقه"
          {...a11yProps(3)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              4 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color: 4 === value ? "white" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "159px",
            border: 4 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<PaymentOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="اشتراک و پرداخت‌ها"
          {...a11yProps(4)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              5 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color: 5 === value ? "white" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "158px",
            border: 5 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<MessageOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="پیام‌ها و گفتگوها"
          {...a11yProps(5)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              6 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color:
              6 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "153px",
            border: 6 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<Diversity2OutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="معرفی به دوستان"
          {...a11yProps(6)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              7 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color:
              7 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "153px",
            border: 7 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<CardGiftcardOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="جایزه‌ ها"
          {...a11yProps(7)}
        />
        <Tab
          sx={{
            display: "flex",
            alignSelf: "start",
            fontWeight: 600,
            background:
              8 === value ? theme.palette.primary.light : "transparent",
            borderRadius: 1,
            color:
              8 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: "153px",
            border: 8 === value ? "none" : "groove",
            marginLeft: 1,
          }}
          icon={<LogoutOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="top"
          label="خروج"
          {...a11yProps(8)}
        />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
