import { Box, TextField, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import React from 'react'

function PostComposer() {
  return (
    <Box className='w-full rounded-lg p-4 bg-[#0f0f0f] text-white mb-8' >
        <TextField
          id="outlined-textarea"
          label=''
          className='w-full [&>div>textarea]:text-white'
          placeholder='Compose new post....'
          multiline
          maxRows={6}
        />
        <div className='p-4' ><hr/></div>
        <Box className='flex justify-between' >
            <div className='flex' >
                <div className='flex place-items-center cursor-pointer mr-6' >
                      <ImageIcon className='text-slate-600 mr-1' /> <Typography variant='body1' fontWeight={'bold'} >Add Image</Typography>
                </div>
                <div className='flex place-items-center cursor-pointer' >
                      <VideoCameraBackIcon className='text-slate-600 mr-1' /> <Typography variant='body1' fontWeight={'bold'} >Add Video</Typography>
                </div>
            </div>
            <div className='font-bold cursor-pointer flex items-center' ><span className='bg-[#ffe41e] border-[1px] border-[black] font-bold rounded-full mr-2 w-[27px] h-[27px] grid place-items-center items-center text-black' >+</span> Create  Post</div>
        </Box>
    </Box>
  )
}

export default PostComposer