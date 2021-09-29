import React, { useState, useContext } from 'react'
import axios from 'axios';
import { TextField, Button } from "@mui/material"
import { Context } from '../context';


export default function ModalForm(props) {

  const { dispatch } = useContext(Context);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

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

  const create = () => {
    const data = {
      name,
      username,
      email,
      phone,
      website,
    }
    axios.post("http://localhost:3000/posts", data)
      .then(response => {
        props.close()
        dispatch({ type: "CHANGE" })
      })
  }

  return (
    <>
      <TextField onChange={handleName} type="text" label="name" variant="outlined" autoFocus />
      <TextField onChange={handleEmail} type="email" label="email" variant="outlined" />
      <TextField onChange={handlePhone} type="text" pattern="[0-9]{10}" label="phone" variant="outlined" />
      <TextField onChange={handleUsername} type="text"  label="username" variant="outlined" />
      <TextField onChange={handleWebsite} type="text" label="website" variant="outlined" />
      <Button sx={{margin: "10px", padding: "5px"}} onClick={create} variant="contained">Add</Button>
    </>
  )
}