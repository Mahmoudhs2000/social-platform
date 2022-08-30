import { Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import PostComposer from './PostComposer/PostComposer';

import React from 'react';

const Home = () => {

    return <div className='flex-1 p-[45px]' >
        <header className='flex justify-between place-items-center mb-8' >
            <div>
                <Typography variant='h4' fontWeight={'bold'} >Home</Typography>
            </div>
            <div className='cursor-pointer' >
                <Typography variant='body1' className='bg-gray-200 px-4 py-1 rounded-lg' >All <FilterListIcon className='ml-1' /> </Typography>
            </div>
        </header>
        <section>
            <PostComposer />
        </section>
    </div>;
};

export default Home;