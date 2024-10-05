import React from 'react';
import {
    Box,
    Typography,
    Toolbar,
    IconButton,
    AppBar,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Divider,
    ListItemIcon,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { mainNavbarItems } from './consts/navbaritems.js';

export default function NavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const drawerWidth = 220;
    const listdrawer = ['Home',];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {mainNavbarItems.map((item, index) => (
                    <ListItem key={item} disablePadding onClick={ () => navigate(item.route) }>
                        <ListItemButton>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{bgcolor:'#272727'}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            sx={{
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                },
                            }}
                            variant="temporary"
                            anchor="left"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Toolbar />
                            <Divider />
                            {DrawerList}
                        </Drawer>
                        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
};
