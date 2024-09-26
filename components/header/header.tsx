import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import portfolio from '@/assets/images/portfolio.svg';
import Image from 'next/image';
import MobileHeader from './mobileHeader';
import NavLink from './navLink';
import Link from 'next/link';

const navItems = [{name: 'About', link: 'about'}, {name: 'Technical Skills', link: 'technicalSkills'} , {name: 'Projects', link: 'Projects'}, {name: 'Contact', link: 'contact'}, {name: 'Resume', link: 'Resume'}];

export default async function Header() {
  return (
    <Box sx={{ display: 'flex', mb: 4 }} component="header">
      <CssBaseline />
      <AppBar elevation={0} sx={{backgroundColor: '#fff'}} position="static" component="nav">
        <Toolbar sx={{ borderBottom: 1}}>         

          <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'block' } }}>
            <Link href="/">
              <Image src={portfolio} width={65} alt="Anil's portfolio's icon" />
            </Link>            
          </Box>
          
          <MobileHeader />
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'black' } }}
          >
            MUI
          </Typography> */}
          <Box sx={{flexGrow: 1, display: {sm: 'none', md: 'flex', textAlign: 'right'}, justifyContent: "space-evenly"}}>
            {navItems.map((item) => (
              <NavLink href={`/${item.link}`} key={item.name} name={item.name} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        
      </nav>      
    </Box>
  );
}
