import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import CssBaseline from "@mui/material/CssBaseline";


export const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmmation: data.get("password_confirmmation")

    };

    if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmmation) {
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registraction successfull",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "password and confirm password does not match",
          type: "error",
        });
      }

    } else {
      setError({
        status: true,
        msg: "Please ! Fill all input field",
        type: "error",
      });
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
            marginLeft: "10%",
            display: "flex",
            flexDirection: "column"
          }}
          id="registration-form"
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">

            Join the ICC's global fan community
          </Typography>
          <TextField
            margin="normal"
            requried
            fullWidth
            id="email"
            name="name"
            label="Name"
            sx={{ width: "30vw" }}
          />
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
          <TextField
            margin="normal"
            requried
            fullWidth
            id="password"
            name="password_confirmmation"
            label="Confirm Password"
            type="password"
            sx={{ width: "30vw" }}
          />
          <FormControlLabel
            control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
            label="I agree to terms and condition"
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: "400px", px: 5 }}
            >
              Sign Up
            </Button>
          </Box>

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
