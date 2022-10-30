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
    {label: 'Home', icon: <OtherHousesIcon className='text-white'  /> },
    {label: 'Explore', icon: <ExploreIcon  style={{color: '#9fa2aa'}} /> , divideAfter: true},
    {label: 'Store', icon: <StoreIcon  style={{color: '#9fa2aa'}} /> },
    {label: 'Balance', icon: <AccountBalanceWalletIcon  style={{color: '#9fa2aa'}} /> ,divideAfter: true},
    {label: 'Bookmarks', icon: <BookmarksIcon  style={{color: '#9fa2aa'}} /> },
    {label: 'Subscriptions', icon: <GroupIcon  style={{color: '#9fa2aa'}} /> },
];

const ListItem = ({label, icon, divideAfter}: ItemType) : ReactElement=> {

    return<>
            <div id='l-item' className={`my-3 py-3 px-1 rounded-3xl !text-[#9fa2aa] flex place-items-center cursor-pointer hover:bg-[#f5f5f5]`} >
                {icon} <Typography variant='body1' className={`relative w-full left-4 text-[${label === 'Home' ? 'white':'#9fa2aa'}] hover:text-black`}  style={{fontWeight: label === 'Home' ? 'bold':''}} > {label}</Typography>
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