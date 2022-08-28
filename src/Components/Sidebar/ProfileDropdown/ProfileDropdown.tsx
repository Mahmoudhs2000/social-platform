import { Typography, Box } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProfileDropdown = () => {

    return <Box className=''>
      <Box className="flex place-items-center cursor-pointer" >
        <img src="https://picsum.photos/200" alt='profimg' className="w-14 rounded-full"  />
        <div className='flex-1 flex justify-around' >
            <Typography variant='h6' className='relative left-[1px]' >Jhon Doe</Typography>
            <KeyboardArrowDownIcon />
        </div>
      </Box>
    </Box>;
};

export default ProfileDropdown;