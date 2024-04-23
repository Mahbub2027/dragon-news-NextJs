import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNewsImg from '@/assets/top-news.png';
import topNewsImg2 from '@/assets/top-news2.png';
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
    const { data } = await getAllNews();
    // console.log(data);
    return (
        <Box className="my-3">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} width={800} height={500} alt='top news img' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>{data[0].category}</p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom>
                            By {data[0].author.name} | {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(0, 6).map(news =>
                        <Grid key={news._id} item xs={6}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img": {
                                            "width": "100%",
                                            "height": "200px"
                                        }
                                    }}>
                                        <Image src={news.thumbnail_url} width={400} height={300} alt='top news img' />
                                    </CardMedia>
                                    <CardContent>
                                        <p className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>{news.category}</p>
                                        <Typography gutterBottom variant="body1" component="div">
                                            {news.title}
                                        </Typography>
                                        <Typography gutterBottom>
                                            By {news.author.name} | {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 100 ? news.details.slice(0,100) : news.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>)
                }


            </Grid>
        </Box>
    );
};

export default LatestNews;