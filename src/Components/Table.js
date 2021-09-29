import React, { useEffect, useState, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton }
  from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { Context } from '../context';
import UpdateComponent from './Update'


export default function BasicTable() {

  const [data, setData] = useState([])
  const [updateId, setUpdateId] = useState(null)
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(r => {
        setData(r.data)
      })
  }, [state])


  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"
    })
    dispatch({ type: "CHANGE" })
  }

  const onUpdate = (id) => {
    setUpdateId(id)
  }

  const updateDone = () => {
    setUpdateId(null)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Username</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Email</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Phone</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Website</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Delete</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {item.id === updateId ? <UpdateComponent done={updateDone} item={item} /> :
                (<><TableCell>{item.name}</TableCell>
                  <TableCell align="center">{item.username}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.phone}</TableCell>
                  <TableCell align="center">{item.website}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => { onDelete(item.id) }} aria-label="delete">
                      <Delete />
                    </IconButton>
                    {/* <Button style={{ backgroundColor: "#d92626" }} variant="contained">Delete</Button> */}
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => { onUpdate(item.id) }} variant="contained">Update</Button>
                  </TableCell></>
                )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}