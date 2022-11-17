import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
      console.log(actualData);
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login success", type: "success" });
      navigate("/");
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "40px",
          marginLeft: "30%",
          display: "flex",
          flexDirection: "column",
        }}
        id="login-form"
        onSubmit={handleSubmit}
      >
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
        <NavLink>Forgot password ?</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};
