"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { IconButton, Stack } from '@mui/material';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Header from './Header';

const navItems = [
  {
    route: 'Home',
    pathname: '/'
  },
  {
    route: 'Pages',
    pathname: '/page'
  },
  {
    route: 'Category',
    pathname: '/category'
  },
  {
    route: 'News',
    pathname: '/news'
  },
  {
    route: 'About',
    pathname: '/about'
  },
  {
    route: 'Contact',
    pathname: '/contact'
  },
];

const Navbar = () => {


  return (
    <>
    <Header></Header>
      <AppBar position="static" className='bg-black'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Image src={logo} width={100} height={100} alt='logo'></Image>

            <Box className="w-full text-center">
              {navItems.map((items) => (
                <Link key={items} href={items.pathname}>
                  <Button className='text-white'>{items.route}</Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack direction='row' sx={{
                "& svg": {
                  color: "white"
                }
              }}>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <XIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;