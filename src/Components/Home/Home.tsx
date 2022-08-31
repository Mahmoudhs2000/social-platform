import { Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import PostComposer from './PostComposer/PostComposer';
import PostsFeed from './PostsFeed/PostsFeed';

import React from 'react';

const Home = () => {

    return <div className='ml-[15%] flex-1 p-[45px]' >
        <header className='flex justify-between place-items-center mb-8' >
            <div>
                <Typography variant='h4' fontWeight={'bold'} >Home</Typography>
            </div>
            <div className='cursor-pointer' >
                <Typography variant='body1' className='bg-[#fff] border-[#c6c6c685] border-[1px] px-4 py-1 rounded-lg' >All <FilterListIcon className='ml-1 text-[#ffe41e]' /> </Typography>
            </div>
        </header>
        <section>
            <PostComposer />
            <PostsFeed />
        </section>
    </div>;
};

export default Home;