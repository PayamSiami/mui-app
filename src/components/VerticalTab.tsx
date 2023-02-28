import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<AccountCircleOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="اطلاعات پروفایل"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<ScatterPlotOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="ویژگی‌ها و علاقه‌ها"
          {...a11yProps(1)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<TerminalOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="برنامه هفتگی"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<FavoriteBorderOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="غذاهای موردعلاقه"
          {...a11yProps(3)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<PaymentOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="اشتراک و پرداخت‌ها"
          {...a11yProps(4)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<MessageOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="پیام‌ها و گفتگوها"
          {...a11yProps(5)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<Diversity2OutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="معرفی به دوستان"
          {...a11yProps(6)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<CardGiftcardOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="جایزه‌ ها"
          {...a11yProps(7)}
        />
        <Tab
          sx={{ display: "flex", alignSelf: "start", fontWeight: 600 }}
          icon={<LogoutOutlinedIcon sx={{ marginLeft: 1 }} />}
          iconPosition="start"
          label="خروج"
          {...a11yProps(8)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        اطلاعات پروفایل
      </TabPanel>
      <TabPanel value={value} index={1}>
        ویژگی‌ها و علاقه‌ها
      </TabPanel>
      <TabPanel value={value} index={2}>
        برنامه هفتگی
      </TabPanel>
      <TabPanel value={value} index={3}>
        غذاهای موردعلاقه
      </TabPanel>
      <TabPanel value={value} index={4}>
        اشتراک و پرداخت‌ها
      </TabPanel>
      <TabPanel value={value} index={5}>
        پیام‌ها و گفتگوها
      </TabPanel>
      <TabPanel value={value} index={6}>
        معرفی به دوستان
      </TabPanel>
      <TabPanel value={value} index={7}>
        جایزه‌ ها
      </TabPanel>
      <TabPanel value={value} index={8}>
        خروج
      </TabPanel>
    </Box>
  );
}
