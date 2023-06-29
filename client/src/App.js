import React from "react";
import DashboardLayout from "./dashboard";
import Chats from "./dashboard/chat";
import Conversation from "./Conversation";
import "./app.css"
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <div className="App">
      
      <Stack direction={"row"}>
      <DashboardLayout/>
      <Chats/>
      <Box sx={{
        height:"100vh",
        width:"calc(100vw - 410px)",
        backgroundColor:"#fff"
      }}>
        <Conversation/>
      </Box>
      
      </Stack>
    </div>
  );
}

export default App;
