import { Box, Typography } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupIcon from '@mui/icons-material/Group';

import { ReactElement } from 'react';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';

type ItemType = {
    label: string,
    icon: ReactElement,
    divideAfter?: Boolean 
};
type ListType = {showNav: Boolean};

const NavList : ItemType[] = [
    {label: 'Home', icon: <OtherHousesIcon  style={{color: 'black'}} /> },
    {label: 'Explore', icon: <ExploreIcon  style={{color: '#9b9fa2'}} /> , divideAfter: true},
    {label: 'Store', icon: <StoreIcon  style={{color: '#9b9fa2'}} /> },
    {label: 'Balance', icon: <AccountBalanceWalletIcon  style={{color: '#9b9fa2'}} /> ,divideAfter: true},
    {label: 'Bookmarks', icon: <BookmarksIcon  style={{color: '#9b9fa2'}} /> },
    {label: 'Subscriptions', icon: <GroupIcon  style={{color: '#9b9fa2'}} /> },
];

const ListItem = ({label, icon, divideAfter}: ItemType) : ReactElement=> {

    return<>
            <div className={`my-3 py-3 px-1 rounded-3xl  flex place-items-center cursor-pointer hover:bg-[#f5f5f5]`} >
                {icon}
                <Typography variant='body1' className={`relative left-4`}  style={{fontWeight: label === 'Home' ? 'bold':''}} > {label}</Typography>
            </div>
            {
                divideAfter ? <hr/>: null
            }
       </>
}

const SideList = ({showNav} : ListType) => {

    return <Box className='mt-6' >
        <ProfileDropdown showNav={showNav} />
         {
          NavList.map((item: ItemType, k : number) => <ListItem key={k} divideAfter={item.divideAfter} label={showNav ?item.label:''} icon={item.icon} />)
         }
    </Box>
};

export default SideList;