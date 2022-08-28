import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';

const Toggler = () => {

    return <Box className='bg-[#f5f5f5] h-screen w-2 absolute right-0 flex justify-center' >
        <Box className='bg-[#f5f5f5]  w-[30px] h-[30px] absolute rounded-full flex justify-center top-[5rem] cursor-pointer' >
            <ArrowBackIosIcon  style={{color: 'black', margin: 'auto auto',width: '40%', position:'relative', right: '-2px'}} />
        </Box>
    </Box>
};

export default Toggler;