import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Box from '@mui/material/Box';

export default function Navbar(){
    return (
        <AppBar position="static">
  <Toolbar>
      <Box sx={{ pr: '10px' }}>
        <SportsEsportsIcon fontSize="large"/>
      </Box>
    <Typography
        variant="h6"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    >
      Morikka's Recommended Games / 猫猫的游戏安利
    </Typography>
  </Toolbar>
</AppBar>
    )
}