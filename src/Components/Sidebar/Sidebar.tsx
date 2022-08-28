import Toggler from './Toggler/toggler';
import SideList from './SideList/SideList';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import { Box } from '@mui/material';
const Sidebar = () => {

    return <Box className='h-screen mr-[10px] max-w-[25%] relative border-r-[#f5f5f5]'>
            <Toggler />
            <Box className='flex justify-center' >
                <Box className='w-[42%] my-11' >
                    <img src="/assets/images/logo.png" alt="sitelogo"  />
                </Box>
            </Box>
            <Box className='mx-[30px] px-1' >
                <ProfileDropdown />
                <SideList />
            </Box>
    </Box>;
};

export default Sidebar;