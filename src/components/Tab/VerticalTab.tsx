import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useTheme } from "@mui/material/styles";

import { Profile } from "../../pages";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{
        flex: 1,
        paddingRight: theme.spacing(1),
        marginTop: theme.spacing(-5),
        borderRight: `1px solid ${theme.palette.secondary.dark}`,
      }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTab() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
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
            width: 300,
          }}
          icon={<AccountCircleOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="?????????????? ??????????????"
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
            width: 300,
          }}
          icon={<ScatterPlotOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="????????????????? ?? ?????????????????"
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
            width: 300,
          }}
          icon={<TerminalOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="???????????? ??????????"
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
            width: 300,
          }}
          icon={<FavoriteBorderOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="???????????? ??????????????????"
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
            color:
              4 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: 300,
          }}
          icon={<PaymentOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="???????????? ?? ???????????????????"
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
            color:
              5 === value ? "white !important" : theme.palette.primary.dark,
            justifyContent: "flex-start",
            width: 300,
          }}
          icon={<MessageOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="??????????????? ?? ??????????????"
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
            width: 300,
          }}
          icon={<Diversity2OutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="?????????? ???? ????????????"
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
            width: 300,
          }}
          icon={<CardGiftcardOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="????????????? ????"
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
            width: 300,
          }}
          icon={<LogoutOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="????????"
          {...a11yProps(8)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        ????????????????? ?? ?????????????????
      </TabPanel>
      <TabPanel value={value} index={2}>
        ???????????? ??????????
      </TabPanel>
      <TabPanel value={value} index={3}>
        ???????????? ??????????????????
      </TabPanel>
      <TabPanel value={value} index={4}>
        ???????????? ?? ???????????????????
      </TabPanel>
      <TabPanel value={value} index={5}>
        ??????????????? ?? ??????????????
      </TabPanel>
      <TabPanel value={value} index={6}>
        ?????????? ???? ????????????
      </TabPanel>
      <TabPanel value={value} index={7}>
        ????????????? ????
      </TabPanel>
      <TabPanel value={value} index={8}>
        ????????
      </TabPanel>
    </Box>
  );
}
