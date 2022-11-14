import { Grid , Card , Typography , Tabs , Tab , Box } from "@mui/material";
import { UserLogin } from "./UserLogin"
import { useState } from "react"

const TabPanel = (props) => {
    const  { children , value , index} = props;
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
      <Grid conatiner>
        {/* <Grid item lg={7} sm={5}>
          happy login
        </Grid> */}
        <Grid item lg={5} sm={7}>
<Card sx={{width:"100%" , height:"100%"}}>
    <Box>
        <Box sx={{borderBottom:1 , borderColor:"divider"}} >
            <Tabs value={value} onChange={handleChange} textColor="secondary" >
                <Tab label="Login" sx={{textTransform : "none" , fontWeight: "bold"}}></Tab>
                <Tab label="Registration" sx={{textTransform : "none" , fontWeight: "bold"}}></Tab>
            </Tabs>
        </Box>
            <TabPanel value={value} index={0} >
                <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1} >User Registration</TabPanel>
    </Box>
</Card>
        </Grid>
      </Grid>
        
     
        </>
    )
}