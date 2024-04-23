import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const DynamicCategories = async ({ params, searchParams }) => {
    // console.log(searchParams);
    const { data: categoryNews } = await getCategoryNews(searchParams.category);
    // console.log(categoryNews);
    return (
        <Box className="my-5">
            <h1>Dynamic Category {searchParams.category} : {categoryNews.length}{" "}</h1>
            <Box>
                <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {
                        categoryNews.map(news => <Grid key={news.id} item xs={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                "width": "100%",
                                                "height": "250px"
                                            }
                                        }
                                        }>
                                            <Image src={news.thumbnail_url} width={400} height={200} alt='img'></Image>
                                        </CardMedia>
                                        <CardContent>
                                            <span className='w-24 bg-red-600 text-white pl-1 my-3 rounded'>{news.category}</span>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                            </Typography>
                                            <Typography gutterBottom>
                                                By {news.author.name} | {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" className='text-justify'>
                                                {news.details.length > 300 ? news.details.slice(0, 250) + "..." : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>)
                    }


                </Grid>
            </Box>
        </Box>
    );
};

export default DynamicCategories;