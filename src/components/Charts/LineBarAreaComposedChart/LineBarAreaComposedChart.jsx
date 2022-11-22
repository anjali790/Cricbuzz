import React, { useState, useEffect } from "react";
import axios from "axios";
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from "recharts";

const data = [
    {
        name: "Page A",
        uv: 590,
        pv: 800,
        // amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        // amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        // amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        // amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        // amt: 1700,
        cnt: 380
    }
];

export function LineBarAreaComposedChart() {
    const [matchData, setMatchData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://heisenbug-world-cup-2018-live-scores-v1.p.rapidapi.com/api/worldcup/match/stats`,
                {
                    params: { team1: 'Russia', team2: 'Saudi Arabia' },
                    headers: {
                        'X-RapidAPI-Key': 'b07e006b79msh0115f64a28516d4p1c5992jsnceb9253b84c0',
                        'X-RapidAPI-Host': 'heisenbug-world-cup-2018-live-scores-v1.p.rapidapi.com'
                    }
                }
            )
            .then(response => {
                console.log(response.data)
                setMatchData([...response.data]);
            });
    }, []);

    return (
        <ComposedChart
            width={550}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
    );
}