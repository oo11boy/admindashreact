import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GradingIcon from '@mui/icons-material/Grading';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import './SideBar.css'
import ListIcon from '@mui/icons-material/List';
export default function SideBar() {
 

    return (
        <>
          
    
            <div className='SidebarItem'>
                <div className='Label'>Dashboard</div>
                <ul className='Sidebarul'>
                    <NavLink to='/' > <li><BusinessIcon style={{ marginRight: '5' }} />Home</li></NavLink>
                    <NavLink to='/Analytics' >    <li><QueryStatsIcon style={{ marginRight: '5' }} />Analytics</li></NavLink>
                    <NavLink to='/Sales'>   <li><TrendingUpIcon style={{ marginRight: '5' }} />Sales</li></NavLink>
                </ul>
            </div>
            <div className='SidebarItem'>
                <div className='Label'>Quick Menu</div>
                <ul className='Sidebarul'>
                    <NavLink to='/Users' > <li><PeopleOutlineIcon style={{ marginRight: '5' }} />Users</li></NavLink>
                    <NavLink to='/Users/NewUsers' >    <li><PersonAddAltIcon style={{ marginRight: '5' }} />New User</li></NavLink>
                    <NavLink to='/Products'>   <li><ProductionQuantityLimitsIcon style={{ marginRight: '5' }} />Products</li></NavLink>
                    <NavLink to='/Products/AddProduct'>   <li><AddShoppingCartIcon style={{ marginRight: '5' }} />New Product</li></NavLink>
                    <NavLink to='/Posts'>   <li><ProductionQuantityLimitsIcon style={{ marginRight: '5' }} />Posts</li></NavLink>
                    <NavLink to='/Posts/AddPost'>   <li><AddShoppingCartIcon style={{ marginRight: '5' }} />New Post</li></NavLink>
                  
                    <NavLink to='/Report'>   <li><AssessmentIcon style={{ marginRight: '5' }} />Reports</li></NavLink>
           
                </ul>
            </div>

            <div className='SidebarItem'>
                <div className='Label'>Notification</div>
                <ul className='Sidebarul'>
                    <NavLink to='/Mail' > <li><MailOutlineIcon style={{ marginRight: '5' }} />Mail</li></NavLink>
                    <NavLink to='/Feedback' >    <li><GradingIcon style={{ marginRight: '5' }} />FeedBack</li></NavLink>
                    <NavLink to='/Messages'>   <li><ChatBubbleOutlineIcon style={{ marginRight: '5' }} />Messages</li></NavLink>
                
           
                </ul>
            </div>
            <div className='SidebarItem'>
                <div className='Label'>Other</div>
                <ul className='Sidebarul'>
                    <NavLink to='/Manage' > <li><ManageHistoryIcon style={{ marginRight: '5' }} />Manage</li></NavLink>
                    <NavLink to='/Settings' >    <li><SettingsIcon style={{ marginRight: '5' }} />Settings</li></NavLink>
                    <NavLink to='/Profile'>   <li><ManageAccountsIcon style={{ marginRight: '5' }} />Profile</li></NavLink>
                
           
                </ul>
            </div>

        </>
    )
}
