import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Paper, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideTopNews from '@/assets/side-top-news.png';
import sideBottomImg from '@/assets/side-bottom-img.png';



const SidebarNews = () => {
    return (
        <Box className="my-3">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideTopNews} width={800} alt='top news img' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin climbs as Elon Musk Says Tesla likely to Accept it again.
                        </Typography>
                        <Typography gutterBottom>
                            By Awlad Hossain | March 18, 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that is a reader will be distracted by the readable content of page when loocking at its layout ...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* second part */}
            <Box  sx={{ flexGrow: 1, overflow: 'hidden'} } className="my-5">
            <Divider />
                <Container
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>B</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography >Bitcoin climbs as Elon Musk Says Tesla likely to Accept it again.</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Divider />
                <Container
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>B</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>Bitcoin climbs as Elon Musk Says Tesla likely to Accept it again.</Typography>
                        </Grid>
                    </Grid>
                </Container> <Divider />
                <Container
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>B</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>Bitcoin climbs as Elon Musk Says Tesla likely to Accept it again.</Typography>
                        </Grid>
                    </Grid>
                </Container> <Divider />
                <Container
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>B</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>Bitcoin climbs as Elon Musk Says Tesla likely to Accept it again.</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

                <Image src={sideBottomImg} width={400} height={400} alt='side img'></Image>
        </Box>
    );
};

export default SidebarNews;