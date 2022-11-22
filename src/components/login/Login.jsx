import { Grid, Card, Tabs, Tab, Box, Avatar } from "@mui/material";

import { UserLogin } from "./UserLogin";
import { Registration } from "./Registration";
import { useState } from "react";
import { Navbar } from "../navbar/Navbar";


const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export const Login = (props) => {
  const [value, setValue] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid conatiner sx={{ height: "100vh" }}>
        <Grid item lg={7} sm={5} sx={{ backgroundColor: "#291646" }}>
          <Navbar />
        </Grid>
        <Grid item lg={5} sm={7} >
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Avatar
                  sx={{ width: "100px", height: "70px" }}
                  alt="Remy Sharp"
                  src="./Image/Logo.png"
                />
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  sx={{ backgroundColor: "pink" }}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
