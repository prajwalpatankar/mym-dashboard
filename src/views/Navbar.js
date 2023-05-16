import React, { useEffect, useState } from 'react';
import {ArrowSquareDown, NotificationBing} from 'iconsax-react';

import './Navbar.css'




const Navbar = (props) => {
    const [userData, setUserData] = useState({
        profilePic: "",
        name: ""
    })


    useEffect(() => {
        setUserData({
            profilePic: "/playground_assets/ellipse41227-tjgn-200h.png",
            name: "Jacob Frost"
        })
    }, [userData])

    return (
        <div className='navbar'>
            <div className='left'>
                <input className='search-bar' placeholder='Search'></input>
            </div>
            <div className='right'>
                <div className='profile-details'>
                    <button className='notification-btn'><NotificationBing size="20" /></button>
                    <img src={userData.profilePic} className='profile-pic' alt='profileImg'></img>
                    <h4 className='profile-name'>{userData.name}</h4>
                    {/* <button className='profile-actions'><img src='/playground_assets/down-icon.png' width='10px' style={{marginLeft: '-2px', marginTop: '3px'}} alt='aroow-down'></img></button> */}
                    <button className='profile-actions'><ArrowSquareDown size="20" /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;