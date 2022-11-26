import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Item } from './ConstData';
import { BarCharts } from '../Charts/BarChart/BarCharts';
import { PercentageStackedAreaChart } from '../Charts/PercentageStackedAreaChart/PercentageStackedAreaChart';
import { SimpleRadarChart } from '../Charts/SimpleRadarChart/SimpleRadarChart';
import { LineBarAreaComposedChart } from '../Charts/LineBarAreaComposedChart/LineBarAreaComposedChart';
import { CricbuzzTable } from '../Table/CricbuzzTable';
import { SliderComp } from '../Carousel/SliderComp';
import { News } from '../News/News';

import './dashboard.css';
import { Card } from '../Card/Card';

export function Dashboard() {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        axios.get('https://frozen-harbor-02472.herokuapp.com/venue')
            .then((response) => {
                setVenue([...response.data]);
            });
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Card />
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
                    {/* <h3>HOST CITIES & VENUES</h3> */}
                    <Grid item xs={3} className="venue_div">
                        <SliderComp venue={venue} />
                    </Grid>
                    <Grid item xs={12}>
                        <CricbuzzTable />
                    </Grid>
                    <Grid item xs={12}>
                        <News />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}