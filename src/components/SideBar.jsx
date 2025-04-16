import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const contacts = [
  { name: "John Doe", username: "@johndoe", avatar: "https://mui.com/static/images/avatar/1.jpg" },
  { name: "Jane Smith", username: "@janesmith", avatar: "https://mui.com/static/images/avatar/2.jpg" },
  { name: "Mike Johnson", username: "@mikejohnson", avatar: "https://mui.com/static/images/avatar/3.jpg" },
  { name: "Emily Davis", username: "@emilydavis", avatar: "https://mui.com/static/images/avatar/4.jpg" },
];

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "360px",
          backgroundColor: "#e1feff",
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(105, 163, 255, 0.5)",
          padding: "16px",
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#6985ff" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            marginBottom: "16px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#fff",
              color: "#6985ff",
              borderRadius: "25px",
              "& fieldset": { borderColor: "#85bcff" },
              "&:hover fieldset": { borderColor: "#6985ff" },
              "&.Mui-focused fieldset": { borderColor: "#6985ff" },
            },
          }}
        />

        {/* Danh sách người liên hệ */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              color: "#6985ff",
            }}
          >
            Người liên hệ gần đây
          </Typography>
          <List>
            {filteredContacts.map((contact, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "8px 0",
                  "&:hover": {
                    backgroundColor: "#85bcff",
                    borderRadius: "15px",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={contact.name}
                    src={contact.avatar}
                    sx={{ border: "2px solid #6985ff" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ color: "#6985ff", fontWeight: "bold" }}
                    >
                      {contact.name}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      sx={{ color: "#85bcff" }}
                    >
                      {contact.username}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
