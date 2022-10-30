import { SearchRounded } from '@mui/icons-material';
import { Box,TextField, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import React from 'react';

type TypeSuggest = {
    backgroundImg: string;
    profileImg?: string;
    name: string;
    isVerify?: boolean;
}
interface BannerProps {
    profile: TypeSuggest
}

const sugges: TypeSuggest[] = [
    {
        profileImg: 'https://loremflickr.com/g/320/280/boat/all',
        backgroundImg: 'https://loremflickr.com/g/320/320/london/all',
        name: 'Lucak Muhate',
        isVerify: true
    },
    {
        profileImg: 'https://loremflickr.com/g/320/260/paris/all',
        backgroundImg: 'https://loremflickr.com/g/320/240/london/all',
        name: 'Lucak Muhate',
        isVerify: false
    },
    {
        profileImg: 'https://loremflickr.com/g/320/240/luxury/all',
        backgroundImg: 'https://loremflickr.com/g/320/240/man/all',
        name: 'Lucak Muhate',
        isVerify: true
    },
]

const Suggestions = () => {

    const PorfileBanner = ({profile}: BannerProps   ) => {

        return <Box className='my-4 w-[87%] h-[150px] rounded-[20px] bg-cover relative cursor-pointer' style={{backgroundImage: `url(${profile.backgroundImg})`}} >
            <div>::</div>
            <div>
                <img className='w-[50px] border-1-[white] rounded-full h-[50px]' src={profile.profileImg} alt="__prof__" />
                <Typography variant='body1' >{profile.name}</Typography>
                {
                    profile.isVerify && 'VERIFIED'
                }
            </div>
        </Box>;
    }

    return <Box className='min-w-[30%]' >
        <Box className='bg-[#fafafa] mt-[40px] mr-[10px] rounded-[20px] flex justify-between place-items-center px-5' >
            <TextField
                id="outlined-textarea"
                label=''
                className='w-full'
                placeholder='Search creators....'
            />
            <SearchRounded style={{color: 'black', opacity: '.6'}} />
        </Box>
        <Box className='flex justify-between place-items-center mt-6 mb-4' >
            <Typography variant='h5' className='!font-bold' >Suggestions</Typography>
            <Box className='flex mx-6 place-items-center'>
                <div className='bg-[#fafafa] rounded-full mx-1 cursor-pointer' ><ArrowBackIosIcon className='scale-[.35]'/></div>
                <div className='bg-[#fafafa] rounded-full mx-1 cursor-pointer' ><ArrowForwardIos className='bg-[#fafafa] scale-[.35]' /></div>
            </Box>
        </Box>
        <Box className='flex flex-col place-items-center' >
            {
            sugges.map((s: TypeSuggest) => <PorfileBanner  profile={s} />)
            }
        </Box>
    </Box>;
};

export default Suggestions;