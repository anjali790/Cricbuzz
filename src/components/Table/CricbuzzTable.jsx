import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './cricbuzztable.css';

export function CricbuzzTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('https://frozen-harbor-02472.herokuapp.com/table')
            .then((response) => {
                setTableData([...response.data]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='table_head'>
                    <TableRow>
                        <TableCell className='player_img'>PLAYER</TableCell>
                        <TableCell className='player_name'>NAME</TableCell>
                        <TableCell align="right">MATCHES</TableCell>
                        <TableCell align="right">INNS</TableCell>
                        <TableCell align="right">RUNS</TableCell>
                        <TableCell align="right">AVG</TableCell>
                        <TableCell align="right">SR</TableCell>
                        <TableCell align="right">4S</TableCell>
                        <TableCell align="right">6S</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={row.imgUrl} alt="" />
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.match}</TableCell>
                            <TableCell align="right">{row.inns}</TableCell>
                            <TableCell align="right">{row.runs}</TableCell>
                            <TableCell align="right">{row.avg}</TableCell>
                            <TableCell align="right">{row.sr}</TableCell>
                            <TableCell align="right">{row.fours}</TableCell>
                            <TableCell align="right">{row.sixes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}