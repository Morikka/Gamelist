import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navbar(){
    return (
        <AppBar position="static">
  <Toolbar>
    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
    <Typography variant="h6">
      Morikka's Recommended Games / 猫猫的游戏安利
    </Typography>
    {/* <Button color="inherit">Login</Button> */}
  </Toolbar>
</AppBar>
    )
}