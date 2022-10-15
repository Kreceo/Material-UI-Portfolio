import { useState } from 'react';
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { List } from '@mui/material';
import { NavProps } from './type';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import HomeIcon from '@mui/icons-material/Home';
// import EmailIcon from '@mui/icons-material/Email';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import PersonIcon from '@mui/icons-material/Person';



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignContent: 'center', height: '100vh', boxShadow: '6px 0 12px rgba(0,0,0,.05)' }}>
        <IconButton
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          sx={{ width: '80px', borderRadius: '0' }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <List sx={{ width: open ? '240px' : '0' }}>

      </List>
    </>
  );
}
