import Toggler from './Toggler/toggler';
import SideList from './SideList/SideList';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState<Boolean>(true);
    useEffect(() => {

    }, [showNav])
    return <Box className={`transition-all duration-300 h-screen mr-[10px] ${showNav ? 'max-w-[15%]' : 'max-w-8'} relative border-r-[#f5f5f5]`}>
            <Toggler showNav={showNav} setShowNav={setShowNav} />
            <Box className='flex justify-center' >
                <Box className='w-[42%] my-11' >
                    <img src="/assets/images/logo.png" alt="sitelogo"  />
                </Box>
            </Box>
            <Box className='mx-[30px] px-1' >
                <SideList showNav={showNav} />
            </Box>
    </Box>;
};

export default Sidebar;