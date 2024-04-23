import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetails = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    console.log(news);
    return (
        <Box className="my-10">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={400} alt='img' />
                        <Grid className='mt-2' container spacing={2} sx={{
                            "& img": {
                                "width": "100%", "height": "200px"
                            }
                        }}>
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={400} alt='img' />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.thumbnail_url} width={800} height={400} alt='img' />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item lg={6}>

                        <Typography variant='h5' component="h2">{news.title}</Typography>
                        <Box  className="my-3" sx={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": 3, 
                            
                        }}>
                            <Avatar src={news.author.img}></Avatar>
                            <Typography variant='body2'>{news.author.name}</Typography>
                            <Typography variant='body2'>-- {news.author.published_date}</Typography>

                        </Box>
                        <Typography variant='body2' style={{
                            textAlign: "justify",
                            whiteSpace: "pre-line",
                            color: "gray",
                        }}>{news.details}</Typography>
                        <Typography className='mt-2' variant='h6'>``Many Desktop publishing packages and 
                        web page editors are now use as their default mode text!``</Typography>
                        <Typography variant='h6'>-- Mahbub Alam</Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetails;