import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNewsImg from '@/assets/top-news.png';
import topNewsImg2 from '@/assets/top-news2.png';
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box className="my-3">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNewsImg} width={800} alt='top news img' />
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

            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNewsImg2} width={400} alt='top news img' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>Technology</p>
                        <Typography gutterBottom variant="body1" component="div">
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
                </Grid>
                <Grid item xs={6}>
                    <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNewsImg2} width={400} alt='top news img' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>Technology</p>
                        <Typography gutterBottom variant="body1" component="div">
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
                </Grid>
                <Grid item xs={6}>
                    <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNewsImg2} width={400} alt='top news img' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>Technology</p>
                        <Typography gutterBottom variant="body1" component="div">
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
                </Grid>
                <Grid item xs={6}>
                    <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNewsImg2} width={400} alt='top news img' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>Technology</p>
                        <Typography gutterBottom variant="body1" component="div">
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
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default LatestNews;