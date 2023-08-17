import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MENUS } from '../Routes/constants';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const drawerWidth = 240;

export default function AdminLayout({ children }) {
  const navigate = useNavigate()
  const handleLogOut = () =>{
    localStorage.removeItem("token");
    navigate("/")
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{display:"flex", justifyContent: "space-between"}}>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
          <Button variant="contained" color="error" onClick={handleLogOut}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {MENUS.map((menu, index) => (
              /* <Link to={menu.path} key={menu.path}> */
              <ListItem key={menu.path} disablePadding onClick={() => { navigate(menu.path) }}>
                <ListItemButton>
                  <ListItemIcon>
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText style={{ color: '#000' }} primary={menu.name} />
                </ListItemButton>
              </ListItem>
              /* </Link> */
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
        <Outlet />
      </Box>
    </Box>
  );
}
