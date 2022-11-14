import { TextField , Button , Box , Alert } from "@mui/material";
import { NavLink } from 'react-router-dom';

export const UserLogin = () => {
    return ( 
        <>
        <Box component="form"  sx={{mt : 1}} id="login-fomr">
            <TextField margin="normal" requried fullWidth id="email" name="email"
            label="Email Address"/>
            <TextField margin="normal" requried fullWidth id="password" name="password"
            label="Password" type="password"/>
            <Box textAlign="center">
                <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}
                >Login</Button>
            </Box>
            <NavLink>Forgot password ?</NavLink>
        </Box> 
        </>
    )
}