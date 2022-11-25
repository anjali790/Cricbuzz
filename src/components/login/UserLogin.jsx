import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import CssBaseline from "@mui/material/CssBaseline";


export const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (actualData.email && actualData.password) {
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login success", type: "success" });
      navigate("/");
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          component="form"
          sx={{
            width: "50vw",
            margin: "20px",
            marginTop: "12%",
            marginLeft: "7%",
            display: "flex",
            flexDirection: "column"

          }}
          id="login-form"
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">
            Welcome to Cricket  community
          </Typography>
          <Typography variant="h6">
            Don't have an account?   <NavLink to="/Registration" > Create a Account </NavLink>
          </Typography>
          <Divider orientation="horizontal" variant="middle" >
            <Typography variant="paragraph">
              Sign up using your social account
            </Typography>
          </Divider >
          <ListItemIcon sx={{ display: "flex", flexDirection: "row", padding: "5px", m: "5px", justifyContent: "center" }}>
            <AppleIcon color="black" />
            <FacebookIcon color="blue" />
            <GoogleIcon color="yellow" />
          </ListItemIcon>
          <Divider variant="middle" />
          <TextField
            margin="normal"
            requried
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            sx={{ width: "30vw" }}
          />

          <TextField
            margin="normal"
            requried
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            sx={{ width: "30vw" }}
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: "400px", px: 5 }}
            >
              Login
            </Button>
          </Box>
          <NavLink to="/EmailPasswordReset" >Forgot password ?</NavLink>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        </Box>
        <Avatar
          variant="square"
          alt="Image"
          src=".\Image\SSO_Background.webp"
          sx={{ width: "17em", height: "100%", position: "absolute", top: "0", left: "72%" }}
        />
      </Box>
    </>
  );
};
