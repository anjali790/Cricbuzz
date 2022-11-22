import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Alert,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import CssBaseline from "@mui/material/CssBaseline";



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
                    id="reset-passwordEmail-form"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h3">
                        Forgot your password?
                    </Typography>
                    <Typography variant="paragraph">
                        Enter your email address below to reset your password
                    </Typography>
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
                            Send Email
                        </Button>
                    </Box>
                    <Typography variant="h6">
                        Already have an account? <NavLink to="/UserLogin" >LogIn</NavLink>
                    </Typography>

                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                </Box>
                <Avatar
                    variant="square"
                    alt="Image"
                    src=".\Image\SSO_Background.webp"
                    sx={{ width: "591px", height: "1024px", position: "absolute", top: "0", left: "51.5%" }}
                />
            </Box >
        </>
    );
}

