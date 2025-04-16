import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  IconButton,
  Avatar,
  Badge
} from '@mui/material';
import {
  Bolt as BoltIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#6985ff", // Màu hồng đậm
        minHeight: 60,
        borderRadius: 0,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box component="img" src="src/assets/Logo.svg" />

        {/* Navigation Tabs Section */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#e1feff",
              height: 3,
              borderRadius: "4px",
            },
            "& .MuiTab-root": {
              color: "#fff",
              "&.Mui-selected": { color: "#e1feff" },
            },
          }}
        >
          <Tab icon={<HomeIcon />} />
          <Tab icon={<PersonIcon />} />
          <Tab icon={<EmailIcon />} />
          <Tab icon={<NotificationsIcon />} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
