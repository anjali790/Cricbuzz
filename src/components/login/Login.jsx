import { Grid , Card , Typography , Tabs , Tab , Box } from "@mui/material";

import { UserLogin } from "./UserLogin"
import { Registration } from "./Registration"
import { useState } from "react"
import { Navbar } from "../navbar/Navbar"

const TabPanel = ({ children , value , index}) => {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index &&  (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

export const Login = () => {

  const [ value , setValue] =  useState();
  const handleChange = (event ,newValue) => {
setValue(newValue)
  }
    return (
        <>
        <Navbar  />
  <Grid conatiner sx={{height : '90vh'}}>
        {/* <Grid item lg={7} sm={5} sx={{backgroundColor : 'pink'}}>
          happy login
    </Grid> */}
    <Grid item lg={12} sm={12}>
          <Card sx={{width:"100%" , height:"100%"}}>
       <Box>
        <Box sx={{borderBottom:1 , borderColor:"divider"}} >
            <Tabs value={value} onChange={handleChange} textColor="secondary" >
                <Tab label="Login" sx={{textTransform : "none" , fontWeight: "bold" }}></Tab>
                <Tab label="Registration" sx={{textTransform : "none" , fontWeight: "bold"  }}></Tab>
            </Tabs>
        </Box>
            <TabPanel value={value} index={0} >
                <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <Registration/>
            </TabPanel>
        </Box>
          </Card>
    </Grid>
  </Grid>
     </>
    )
}