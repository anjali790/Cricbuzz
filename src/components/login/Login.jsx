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
                  sx={{ width: "100px" }}
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
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
