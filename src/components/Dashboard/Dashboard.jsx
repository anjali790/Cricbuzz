import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Item } from './ConstData';
import { BarCharts } from '../Charts/BarChart/BarCharts';
import { PercentageStackedAreaChart } from '../Charts/PercentageStackedAreaChart/PercentageStackedAreaChart';
import { SimpleRadarChart } from '../Charts/SimpleRadarChart/SimpleRadarChart';
import { LineBarAreaComposedChart } from '../Charts/LineBarAreaComposedChart/LineBarAreaComposedChart';

import './dashboard.css';
import { CricbuzzTable } from '../Table/CricbuzzTable';
import { SliderComp } from '../Carousel/SliderComp';

export function Dashboard() {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        axios.get('https://frozen-harbor-02472.herokuapp.com/venue')
            .then((response) => {
                console.log(response.data)
                setVenue([...response.data]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <Box sx={{ flexGrow:1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deleniti quas facilis totam veniam molestiae praesentium vitae voluptate quibusdam, maxime cum voluptates magnam dignissimos corporis eligendi aperiam nihil aut reprehenderit. </p></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deleniti quas facilis totam veniam molestiae praesentium vitae voluptate quibusdam, maxime cum voluptates magnam dignissimos corporis eligendi aperiam nihil aut reprehenderit. </p></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deleniti quas facilis totam veniam molestiae praesentium vitae voluptate quibusdam, maxime cum voluptates magnam dignissimos corporis eligendi aperiam nihil aut reprehenderit. </p></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deleniti quas facilis totam veniam molestiae praesentium vitae voluptate quibusdam, maxime cum voluptates magnam dignissimos corporis eligendi aperiam nihil aut reprehenderit. </p></Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item><BarCharts /></Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item><LineBarAreaComposedChart /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><SimpleRadarChart /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><PercentageStackedAreaChart /></Item>
                    </Grid>
                    <h3>HOST CITIES & VENUES</h3>
                    <Grid item xs={12} className="venue_div">
                        {/* {venue.map((data) => (
                            <div key={data.id}>
                                <Item>
                                    <div className='flex'>
                                        <div>
                                            <img className='venueImg' height="230px" width="310px" src={data.imgUrl} alt="" />
                                            <h5>{data.address[0].venue}</h5>
                                            <p>{data.about.length > 100 ? `${data.about.substring(0, 75)}...` : data.about}</p>
                                        </div>
                                    </div>
                                </Item>
                            </div>
                        ))} */}
                        <SliderComp venue={venue} />
                        {/* <h1>hello</h1> */}
                    </Grid>

                    <Grid item xs={12}>
                        <CricbuzzTable />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}