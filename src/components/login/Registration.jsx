import React from 'react'
import { TextField , Button , Box , Alert , FormControlLabel  , Checkbox } from "@mui/material";
import { useState } from "react"
import {  useNavigate } from 'react-router-dom';

export const Registration = () => {
     const [error , setError] = useState({
        status : false,
        msg:"",
        type:""
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get("email"),
            password: data.get("password"),
        }
        
        if(actualData.email && actualData.password){
            console.log(actualData)
              document.getElementById('login-form').reset()
              setError({status:true , msg:"Login success" , type:"success"})
              navigate('/')
        }else{
             setError({status:true , msg:"All fields are required" , type:"error"})
        }
    }
  return (
    <>
    <Box component="form"  sx={{margin : "40px" , marginLeft: "30%" , display: " flex" , flexDirection : "column"}} 
    id="registration-form" 
        onSubmit={handleSubmit}>
            <TextField margin="normal" requried fullWidth id="email" name="name"
                    label="Name" sx={{width : '30vw'}} />
            <TextField margin="normal" requried fullWidth id="email" name="email"
                    label="Email Address" sx={{width : '30vw'}} />
            <TextField margin="normal" requried fullWidth id="password" name="password"
            label="Password" type="password"  sx={{width : '30vw'}}/>
            <TextField margin="normal" requried fullWidth id="password" name="password-confrimation"
            label="Confirm Password" type="password"  sx={{width : '30vw'}}/>
            <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>} label="I agree to terms and condition"/>
            <Box textAlign="center">
                <Button type="submit" variant="contained" sx={{mt:3, mb:2, mr:"400px" , px:5}}
                >Sign Up</Button>
            </Box>
           
            {error.status ? 
            <Alert severity={error.type} >{error.msg}</Alert> : ""
}
        </Box> 
    </>
  )
}

