import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={NavLink} to="/" onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem
        component={NavLink}
        to="/login"
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "$6d1b7b" : "" };
        }}
        onClick={handleMenuClose}
      >
        New User
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#291646" }}
        color="secondary"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={props.handle}
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                // src="../../Image/logo.jfif"
                src="data:image/jpeg;base64,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"
              />
            </Stack>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <DarkModeOutlinedIcon
                  className="icons"
                  onClick={() =>
                    props.setMode(props.mode === "light" ? "dark" : "light")
                  }
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
