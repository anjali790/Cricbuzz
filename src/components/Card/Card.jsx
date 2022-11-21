import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./Card.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function MainData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://frozen-harbor-02472.herokuapp.com/series`)
      .then((res) => {
        console.log(res.data);
        setData([...res.data]);
      });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="Box">
        <Grid container spacing={2} className="grid-1">
          <Grid item xs={12} className="grid-2">
            {data.map((item) => (
              <Item className="item">
                <div className="outermost-container">
                  <div className="item-card-1">
                    <div>
                      <img
                        className="team-image-1"
                        src={item.imgF}
                        alt="team 1"
                      />
                      <h5 className="name">{item.nameF}</h5>
                    </div>
                    <p className="versus">v/s</p>
                    <div>
                      <img
                        className="team-image-2"
                        src={item.imgL}
                        alt="team 2"
                      />
                      <h5 className="name">{item.nameL}</h5>
                    </div>
                  </div>
                  <div className="item-card-2">
                    <h5 className="date">{item.date}</h5>
                    <h5 className="time">{item.time}</h5>
                    <a href={item.joinLink} target="_blank" className="link">
                      Join Now
                    </a>
                  </div>
                </div>
                <h3 className="matchNo">{item.matchNo}</h3>
              </Item>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
