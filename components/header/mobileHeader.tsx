"use client";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const navItems = [{name: 'About', link: 'about'}, {name: 'Technical Skills', link: 'technicalSkills'} , {name: 'Work Experience', link: 'workExperience'}, {name: 'Contact', link: 'contact'}, {name: 'Resume', link: 'Resume'}];
const drawerWidth = 240;

export default function MobileHeader () {
    const [drawerState, toggleDrawer] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        toggleDrawer((prevState) => !prevState);
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' }, color: '#000' }}
            >
                <MenuIcon />
            </IconButton>
            <nav>
                <Drawer
                    variant="temporary"
                    open={drawerState}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true
                    }}
                    sx={{
                      display: { sm: 'block', md: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <List>
                            {navItems.map((item, index) => (
                              <ListItem key={item.name} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <Link href={`/${item.link}`}>
                                        <ListItemText primary={item.name} />
                                    </Link>                                  
                                </ListItemButton>
                              </ListItem>
                            ))}
                        </List>
                    </Box>          
                </Drawer>
            </nav>
        </>
    );
}