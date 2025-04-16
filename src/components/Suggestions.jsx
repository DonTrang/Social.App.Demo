import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import "../styles/Suggestions.css";

// Mock data for suggestions
const suggestedUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    username: "@mikejohnson",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
  },
  // Add more users as needed
];

const Suggestions = () => {
  const [following, setFollowing] = React.useState({});

  const handleFollow = (userId) => {
    setFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <Box
      maxWidth={"350px"}
      sx={{
        padding: "16px",
        backgroundColor: "#e1feff",
        borderRadius: "25px",
        position: "fixed",
        boxShadow: "0 4px 10px rgba(105, 148, 255, 0.5)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#6985ff",
          }}
        >
          Gợi ý cho bạn
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            color: "#85bcff",
          }}
        >
          Xem tất cả
        </Typography>
      </Box>

      <List sx={{ width: "300px" }}>
        {suggestedUsers.map((user) => (
          <ListItem
            key={user.id}
            sx={{
              px: 0,
              "&:hover": {
                backgroundColor: "#6985ff",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} sx={{ width: 40, height: 40 }} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    color: "#6985ff",
                  }}
                >
                  {user.name}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.8rem", color: "#808080" }}
                >
                  {user.username}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                size="small"
                sx={{
                  color: following[user.id] ? "text.secondary" : "#0a0a0a",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "25px",
                }}
                onClick={() => handleFollow(user.id)}
              >
                {following[user.id] ? "Đã theo dõi" : "Theo dõi"}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Suggestions;
