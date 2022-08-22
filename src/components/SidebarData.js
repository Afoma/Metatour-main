import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome />,
        className: 'sidebar-text'
    },
    {
        title: 'DAOs',
        path: '/daos',
        icon:<FaIcons.FaBuilding />,
        className: 'sidebar-text'
    },
    {
        title: 'Web3 Schools',
        path: '/web3schools',
        icon:<FaIcons.FaSchool />,
        className: 'sidebar-text'
    },
    {
        title: 'Web3 Grants',
        path: '/web3grants',
        icon:<FaIcons.FaGift />,
        className: 'sidebar-text'
    },
    {
        title: 'Web3 Jobs',
        path: '/web3jobs',
        icon:<BsIcons.BsFillBriefcaseFill />,
        className: 'sidebar-text'
    },
    {
        title: 'NFT Marketplaces',
        path: '/nftmarketplaces',
        icon:<AiIcons.AiFillShopping />,
        className: 'sidebar-text'
    },
]
