import { Typography, Box } from "@mui/material";

type ListType = {showNav: Boolean};

const ProfileDropdown = ({showNav}: ListType) => {

    return <Box className=''>
      <Box className="flex place-items-center cursor-pointer" >
        <img src="https://picsum.photos/200" alt='profimg' className="w-14 rounded-full"  />
        <div className='flex-1 flex justify-around' >
            {showNav ? <Typography variant='h6' className='relative left-[1px]' >Jhon Doe</Typography>: ''}
        </div>
      </Box>
    </Box>;
};

export default ProfileDropdown;