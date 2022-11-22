import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export function EmailPasswordReset() {
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
        };

        if (actualData.email) {
            document.getElementById("reset-passwordEmail-form").reset();
            setError({
                status: true,
                msg: "Password Reset email sent. Check Email !!",
                type: "success",
            });
            setTimeout(() => {
                navigate('/ResetPassword')
            })
        } else {
            setError({
                status: true,
                msg: "Please Provide valid email",
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
                id="reset-passwordEmail-form"
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
                <Box textAlign="center">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, mr: "400px", px: 5 }}
                    >
                        Send
                    </Button>
                </Box>

                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    );
}

