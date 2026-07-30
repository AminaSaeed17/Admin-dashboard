import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, styled } from "@mui/material";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

  return (
    <>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen}/>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" sx={{flexGrow: 1, p: 3, width: "100%",
          minHeight: "100vh",
          overflow: "hidden",}}>
        <DrawerHeader/>
      <Outlet/>
      </Box>
    </Box>
    </>
  );
}
