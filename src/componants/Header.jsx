import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <img src="https://www.atatus.com/glossary/content/images/size/w960/2021/07/CRUD.jpeg" alt="" width={'300px'} height={'100px'} style={{borderRadius:'30px',padding:'10px'}}/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header