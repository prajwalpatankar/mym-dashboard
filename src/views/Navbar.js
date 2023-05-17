import React, { useEffect, useState } from 'react';
import { ArrowSquareDown, NotificationBing, SearchNormal1 } from 'iconsax-react';
import { Dropdown, Popover } from 'antd';

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


    const items = [
        {
            label: (
                <div>
                    Edit Profile
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div>
                    Switch Account
                </div>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div>
                    Log Out
                </div>
            ),
            key: '2',
        },
    ];

    const content = (
        <div>
          No new notifications!
        </div>
      );

    return (
        <div className='navbar'>
            <div className='left'>
                <input className='search-bar' placeholder='Search' />
                <SearchNormal1 className='search-icon' />
            </div>
            <div className='right'>
                <div className='profile-details'>
                    <Popover content={content} title="Notifications" trigger="click">
                        <button className='notification-btn'><NotificationBing size="20" /></button>
                    </Popover>
                    {/* <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <button className='notification-btn'><NotificationBing size="20" /></button>
                        </a>
                    </Dropdown> */}

                    <img src={userData.profilePic} className='profile-pic' alt='profileImg'></img>
                    <h4 className='profile-name'>{userData.name}</h4>

                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <div onClick={(e) => e.preventDefault()}>
                            <button className='profile-actions'><ArrowSquareDown size="20" /></button>
                        </div>
                    </Dropdown>

                </div>
            </div>
        </div>
    )
}

export default Navbar;