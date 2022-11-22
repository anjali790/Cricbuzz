import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Alert,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from 'react-router-dom';




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
            password_confirmation: data.get("password_confirmation")

        };

        if (actualData.oldpassword && actualData.password && actualData.password_confirmation) {
            console.log(actualData);
            if (actualData.password === actualData.password_confirmation) {
                document.getElementById("registration-form").reset();
                setError({
                    status: true,
                    msg: "Password change successfull",
                    type: "success",
                });
            } else {
                setError({
                    status: true,
                    msg: "password and confirm password does not match",
                    type: "error",
                });
            }
            setTimeout(() => {

                navigate('/UserLogin')
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
            <CssBaseline />
            <Box sx={{ width: "100%", height: "100%" }}>
                <Box
                    component="form"
                    sx={{
                        width: "50vw",
                        margin: "20px",
                        marginTop: "10%",
                        marginLeft: "10%",
                        display: "flex",
                        flexDirection: "column"
                    }}
                    id="registration-form"
                    onSubmit={handleSubmit}
                >
                    <Typography
                        variant="h4"
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
                        type="password"
                        sx={{ width: "30vw" }}
                    />
                    <TextField
                        margin="normal"
                        requried
                        fullWidth
                        id="password"
                        name="newpassword"
                        label="New-password"
                        type="password"
                        sx={{ width: "30vw" }}
                    />
                    <TextField
                        margin="normal"
                        requried
                        fullWidth
                        id="password"
                        name="password_confirmation"
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
                <Avatar
                    variant="square"
                    alt="Image"
                    src=".\Image\SSO_Background.webp"
                    sx={{ width: "591px", height: "1024px", position: "absolute", top: "0", left: "51.5%" }}
                />
            </Box>
        </>
    );
}
