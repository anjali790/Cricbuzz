import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableRowsIcon from "@mui/icons-material/TableRows";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = (props) => {
  const [down, setDown] = React.useState(true);

  const handleClick = () => {
    setDown(!down);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={props.open}
        
      >
        <DrawerHeader sx={{ backgroundColor: "#291646", padding: "0 auto" }} onClick={props.handleDrawerClose}>
          <ChevronLeftIcon sx={{ color: "white", textSize: "20px" }} />
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            CricBuzz
          </Typography>
          <ChevronRightIcon sx={{ color: "white", textSize: "20px" }} />
          {/* <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#291646" }} />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <TableRowsIcon sx={{ color: "DodgerBlue" }}  />
            </ListItemIcon>
            <ListItemText primary="Table" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <BarChartIcon sx={{ color: "DodgerBlue" }}  />
            </ListItemIcon>
            <ListItemText primary="Chart" />
            {down ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={down} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <TrendingDownIcon sx={{ color: "#3cb371" }} />
                </ListItemIcon>
                <ListItemText primary="Trending" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StackedBarChartIcon sx={{ color: "#3cb371" }} />
                </ListItemIcon>
                <ListItemText primary="StackedBar" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            component={NavLink}
            to="/login"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "$6d1b7b" : "" };
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Dashboard component={NavLink}
            to="/login" />
      </Box> */}
    </Box>
  );
};
