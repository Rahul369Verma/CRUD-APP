import React, { useState, useContext } from 'react'
import axios from 'axios';
import { TableCell, TextField, Button } from '@mui/material'
import { Context } from '../context';


export default function Update(props) {

  const item = props.item
  const [name, setName] = useState(item.name);
  const [username, setUsername] = useState(item.username);
  const [phone, setPhone] = useState(item.phone);
  const [email, setEmail] = useState(item.email);
  const [website, setWebsite] = useState(item.website);
  

  const { dispatch } = useContext(Context);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleWebsite = (event) => {
    setWebsite(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const update = () => {
    const data = {
      name,
      username,
      email,
      phone,
      website,
    }
    axios.put(`http://localhost:3000/posts/${props.item.id}`, data)
      .then(response => {
        dispatch({ type: "CHANGE" })
        props.done()
      })
  }

  
  return (
    <>
      <TableCell component="th" scope="row">
        <TextField size="small" defaultValue={item.name} onChange={handleName} label="name" variant="outlined" autoFocus /></TableCell>
      <TableCell align="center">
        <TextField size="small" defaultValue={item.username} onChange={handleUsername} label="username" variant="outlined" /></TableCell>
      <TableCell align="center">
        <TextField size="small" defaultValue={item.email} onChange={handleEmail} label="email" variant="outlined" /></TableCell>
      <TableCell align="center">
        <TextField size="small" defaultValue={item.phone} onChange={handlePhone} label="phone" variant="outlined" /></TableCell>
      <TableCell align="center">
        <TextField size="small" defaultValue={item.website} onChange={handleWebsite} label="website" variant="outlined" />
      </TableCell>
      <TableCell align="center"><Button onClick={props.done} variant="contained">Cancel</Button></TableCell>
      <TableCell align="center"><Button onClick={update} variant="contained">Update</Button></TableCell>
    </>
  )
}