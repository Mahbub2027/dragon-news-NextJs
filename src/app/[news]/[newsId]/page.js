import { getSingleNews } from '@/utils/getSingleNews';
import React from 'react';

const NewsDetails =  async ({params}) => {
    const news = await getSingleNews(params.newsId);
    console.log(news);
    return (
        <div>
            {params.newsId}
        </div>
    );
};

export default NewsDetails;