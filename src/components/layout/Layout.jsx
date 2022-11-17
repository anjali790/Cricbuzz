import React, { useState } from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";

import { Navbar } from "../navbar/Navbar";
import { Sidebar } from "../sidebar/Sidebar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Layout = () => {
  const [mode, setMode] = useState("light");
  

  let Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [open, setOpen] = useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Navbar handle={handleDrawerOpen} mode={mode} setMode={setMode} />
        </AppBar>
        <Sidebar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </ThemeProvider>
    </>
  );
};
