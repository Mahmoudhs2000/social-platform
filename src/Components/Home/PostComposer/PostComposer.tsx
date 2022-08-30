import { Box, TextField, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import React from 'react'

function PostComposer() {
  return (
    <Box className='w-full rounded-lg p-4 bg-[#fafafa]' >
        <TextField
          id="outlined-textarea"
          label=''
          placeholder='Compose new post....'
          multiline
          maxRows={6}
        />
        <div className='p-4' ><hr/></div>
        <Box>
            <div className='flex' >
                <div>
                    <ImageIcon /> <Typography variant='body1' fontWeight={'bold'} >Add Image</Typography>
                </div>
            </div>
            <div></div>
        </Box>
    </Box>
  )
}

export default PostComposer