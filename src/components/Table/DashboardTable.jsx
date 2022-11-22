import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function DashboardTable() {
  const [cricbuzzData, setCricbuzzData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/venue/24`,
        {
          headers: {
            'X-RapidAPI-Key': 'b07e006b79msh0115f64a28516d4p1c5992jsnceb9253b84c0',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
        }
      )
      .then(response => {
        console.log(response.data)
        setCricbuzzData([...response.data]);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell align="right">Nickname</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Batting Style</StyledTableCell>
            <StyledTableCell align="right">Bowling Style</StyledTableCell>
            <StyledTableCell align="right">Team Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cricbuzzData.map((name, nickName, role, battingStyle, bowlingStyle, teamName) => (
            <StyledTableRow key={name}>
              <StyledTableCell component="th" scope="row">{name}</StyledTableCell>
              <StyledTableCell align="right">{nickName}</StyledTableCell>
              <StyledTableCell align="right">{role}</StyledTableCell>
              <StyledTableCell align="right">{battingStyle}</StyledTableCell>
              <StyledTableCell align="right">{bowlingStyle}</StyledTableCell>
              <StyledTableCell align="right">{teamName}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}