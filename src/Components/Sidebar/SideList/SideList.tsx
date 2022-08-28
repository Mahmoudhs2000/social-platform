import { Box, Typography } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupIcon from '@mui/icons-material/Group';

import { ReactElement } from 'react';

type ItemType = {
    label: string,
    icon: ReactElement,
    divideAfter?: Boolean 
}

const NavList : ItemType[] = [
    {label: 'Home', icon: <OtherHousesIcon /> },
    {label: 'Explore', icon: <ExploreIcon /> , divideAfter: true},
    {label: 'Store', icon: <StoreIcon /> },
    {label: 'Balance', icon: <AccountBalanceWalletIcon /> ,divideAfter: true},
    {label: 'Bookmarks', icon: <BookmarksIcon /> },
    {label: 'Subscriptions', icon: <GroupIcon /> },
];

const ListItem = ({label, icon, divideAfter}: ItemType) : ReactElement=> {

    return<>
            <div className='my-3 py-3 px-1 rounded-3xl flex place-items-center cursor-pointer hover:bg-[#f5f5f5]' >
                {icon}
                <Typography variant='h6' className='relative left-4' > {label}</Typography>
            </div>
            {
                divideAfter ? <hr/>: null
            }
       </>
}

const SideList = () => {

    return <Box className='mt-16' >
         {
          NavList.map((item: ItemType) => <ListItem divideAfter={item.divideAfter} label={item.label} icon={item.icon} />)
         }
    </Box>
};

export default SideList;