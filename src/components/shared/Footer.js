// "use client"

import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const footerItems = [
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

const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center"
                    sx={{
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

                </Box>

                <Box className="w-full text-center">
                    {footerItems.map((items) => (
                        <Link key={items} href={items.pathname}>
                            <Button className='text-white'>{items.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography color="gray" variant='body2' textAlign='center'>
                    @2023 The Dragon News. Design By Mahbub
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;