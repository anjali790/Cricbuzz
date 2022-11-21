import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Alert,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../navbar/Navbar";



export function ResetPassword() {
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
            oldpassword: data.get("Oldpassword"),
            password: data.get("newpassword"),
            password_confrimation: data.get("password_confrimation")

        };

        if (actualData.oldpassword && actualData.password && actualData.password_confrimation) {
            console.log(actualData);
            if (actualData.password === actualData.password_confrimation) {
                document.getElementById("registration-form").reset();
                setError({
                    status: true,
                    msg: "Password change successfull",
                    type: "success",
                });
            } else {
                setError({
                    status: true,
                    msg: "password and confrim password does not match",
                    type: "error",
                });
            }
            setTimeout(() => {

                navigate('/login')
            }, 3000)
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
            <Navbar />
            <Box
                component="form"
                sx={{
                    margin: "40px",
                    marginLeft: "30%",
                    display: " flex",
                    flexDirection: "column",
                }}
                id="registration-form"
                onSubmit={handleSubmit}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                        textAlign: "center",
                    }}
                >
                    Reset Password
                </Typography>
                <TextField
                    margin="normal"
                    requried
                    fullWidth
                    id="password"
                    name="Oldpassword"
                    label="Old-password"
                    type="Oldpassword"
                    sx={{ width: "30vw" }}
                />
                <TextField
                    margin="normal"
                    requried
                    fullWidth
                    id="password"
                    name="newpassword"
                    label="New-password"
                    type="newpassword"
                    sx={{ width: "30vw" }}
                />
                <TextField
                    margin="normal"
                    requried
                    fullWidth
                    id="password"
                    name="password_confrimation"
                    label="Confirm Password"
                    type="password"
                    sx={{ width: "30vw" }}
                />
                <Box textAlign="center">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, mr: "400px", px: 5 }}
                    >
                        Save
                    </Button>
                </Box>

                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    );
}
