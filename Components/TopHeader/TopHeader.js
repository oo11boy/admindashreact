import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import './TopHeader.css'

export default function TopHeader() {
  
  return (
    <div className='containerTopHeader'>
        <div className="rowTopHeader">
            <div className="leftside">
                Abzarkhone
            </div>
            <div className='rightside'>
               <div className="TopHeaderIcons">
                <div className='iconsTopHeader'>
                <NotificationsNoneIcon />
                  <span>2</span>
                </div>
                <div className='iconsTopHeader'>
                  <LanguageIcon />
                  <span>2</span>
                  </div>
                  <SettingsIcon />
                 
                  <Avatar alt="Remy Sharp" src="../Images/TopHeader/2.jpg" />
               </div>
            </div>
        </div>
    </div>
  )
}
