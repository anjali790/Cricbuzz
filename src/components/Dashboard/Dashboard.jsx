import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Item } from './ConstData';
import { BarCharts } from '../Charts/BarChart/BarCharts';
import { PercentageStackedAreaChart } from '../Charts/PercentageStackedAreaChart/PercentageStackedAreaChart';
import { SimpleRadarChart } from '../Charts/SimpleRadarChart/SimpleRadarChart';
import { LineBarAreaComposedChart } from '../Charts/LineBarAreaComposedChart/LineBarAreaComposedChart';

import './dashboard.css';

export function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
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
            </Grid>
        </Box>
    );
}