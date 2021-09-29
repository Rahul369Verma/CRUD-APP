import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import ModalForm from './ModalForm';

const style = {
  '& .MuiTextField-root': { m: 1, width: '50ch' },
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ButtonAppBar() {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CRUD_APP
            </Typography>
            <Button onClick={handleOpen} color="inherit">Add New Item</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} component="form"
          noValidate
          autoComplete="off">
            <ModalForm close={handleClose} />
        </Box>
      </Modal>
    </>
  );
}