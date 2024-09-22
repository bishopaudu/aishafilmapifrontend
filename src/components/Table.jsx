/* eslint-disable react/prop-types */
/*import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";


export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Stars</th>
            <th className="expand">Review</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.year}</td>
                <td>{row.director}</td>
                <td>{row.stars}</td>
                <td>{row.review}</td>
                <td className="actions">
                  <BsFillTrashFill
                    className="delete-btn"
                    onClick={() => deleteRow(idx)}
                  />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => editRow(idx)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};*/

/* eslint-disable react/prop-types */
import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <TableContainer component={Paper} className="table-wrapper">
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Id</TableCell>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Title</TableCell>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Year</TableCell>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Director</TableCell>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Stars</TableCell>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Review</TableCell>
            <TableCell style={{ backgroundColor: '#1976d2', color: '#fff' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.director}</TableCell>
              <TableCell>{row.stars}</TableCell>
              <TableCell>{row.review}</TableCell>
              <TableCell>
                <IconButton onClick={() => deleteRow(idx)}>
                  <BsFillTrashFill className="delete-btn" />
                </IconButton>
                <IconButton onClick={() => editRow(idx)}>
                  <BsFillPencilFill className="edit-btn" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};




