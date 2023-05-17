import React, { useEffect, useState } from 'react'
import { Grid3, Message, Calendar, Flash, Setting3, Danger, LogoutCurve } from 'iconsax-react';

import './Sidebar.css'
import Dashboard from './dashboard/Dashboard';
import Messages from './messages/Messages';
import CalendarComponent from './calendar/Calendar';
import Campaign from './campaign/Campaign';
import Settings from './settings/Settings';
import Help from './help/Help';

import { message } from 'antd';

const Sidebar = (props) => {

  // state to handle active component
  const [activeButton, setActiveButton] = useState('Dashboard');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // state to calculate free trail days
  const [userDetails, setUserDetails] = useState({
    paidMember: false,
    daysLeft: 0
  })

  useEffect(() => {
    // Check if user has a membership or on a free trial. OR some logic here to calculate free trial days
    setUserDetails({
      paidMember: false,
      daysLeft: 10
    });
  }, [userDetails])

  // Dynamic components based on sidebar actions
  let result;
  switch (activeButton) {
    case 'Dashboard':
      result = <Dashboard />;
      break;
    case 'Messages':
      result = <Messages />;
      break;
    case 'Calendar':
      result = <CalendarComponent />;
      break;
    case 'Campaign':
      result = <Campaign />;
      break;
    case 'Settings':
      result = <Settings />;
      break;
    case 'Help':
      result = <Help />;
      break;
    default:
      result = <Dashboard />;
      break;
  }


  // Log out
  const handleLogOut = () => {
    handleButtonClick('Log Out');
    message.success("Successfully logged out");
    handleButtonClick('Dashboard');
  }

  // Upgrade Membership
  const handleUpgrade = () => {
    message.info("Upgrade plans not available yet!")
  }


  // handle smaller screens
  const [smallWindow, setSmallWindow] = useState(window.innerWidth < 1100 ? true : false);

  // dynamic MenuBar
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1100) {
        setSmallWindow(true);
      } else {
        setSmallWindow(false);
      }
    });
  }, [])

  return (
    <div className='component-container'>
      {smallWindow ?
        // small sidebar for smaller screens
        <div className='small-sidebar'>
          <div className='main-logo'>
            <img src='/playground_assets/logo.png' alt='logo' className='logo' />
          </div>

          <div className='menu-group-1'>
            <button
              className={`menu-btn ${activeButton === 'Dashboard' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleButtonClick('Dashboard')}
            >
              <Grid3 size="20" style={{ marginRight: '15px' }} />
            </button>
            <button
              className={`menu-btn ${activeButton === 'Messages' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleButtonClick('Messages')}
            >
              <Message size="20" style={{ marginRight: '15px' }} />
            </button>
            <button
              className={`menu-btn ${activeButton === 'Calendar' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleButtonClick('Calendar')}
            >
              <Calendar size="20" style={{ marginRight: '15px' }} />
            </button>
            <button
              className={`menu-btn ${activeButton === 'Campaign' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleButtonClick('Campaign')}
            >
              <Flash size="20" style={{ marginRight: '15px' }} />
            </button>
          </div>
          <div className='menu-group-2'>
            <button
              className={`menu-btn ${activeButton === 'Settings' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleButtonClick('Settings')}
            >
              <Setting3 size="20" style={{ marginRight: '15px' }} />
            </button>
            <button
              className={`menu-btn ${activeButton === 'Help' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleButtonClick('Help')}
            >
              <Danger size="20" style={{ marginRight: '15px' }} />
            </button>
          </div>

          <div className='menu-group-3'>
            <button
              className={`menu-btn ${activeButton === 'Log Out' ? 'menu-btn-active-small' : ''}`}
              onClick={() => handleLogOut()}
            >
              <LogoutCurve size="20" style={{ marginRight: '15px' }} />
            </button>
          </div>
        </div>
        :
        // Larger Sidebar
        <div>
          <div className='sidebar'>
            <div className='main-logo'>
              <img src='/playground_assets/logo.png' alt='logo' className='logo' />
              <p style={{marginTop: '25px'}}>Realply</p>
            </div>

            <div className='menu-group-1'>
              <button
                className={`menu-btn ${activeButton === 'Dashboard' ? 'menu-btn-active' : ''}`}
                onClick={() => handleButtonClick('Dashboard')}
              >
                <Grid3 size="20" style={{ marginRight: '15px' }} />
                Dashboard
              </button>
              <button
                className={`menu-btn ${activeButton === 'Messages' ? 'menu-btn-active' : ''}`}
                onClick={() => handleButtonClick('Messages')}
              >
                <Message size="20" style={{ marginRight: '15px' }} />
                Messages
              </button>
              <button
                className={`menu-btn ${activeButton === 'Calendar' ? 'menu-btn-active' : ''}`}
                onClick={() => handleButtonClick('Calendar')}
              >
                <Calendar size="20" style={{ marginRight: '15px' }} />
                Calendar
              </button>
              <button
                className={`menu-btn ${activeButton === 'Campaign' ? 'menu-btn-active' : ''}`}
                onClick={() => handleButtonClick('Campaign')}
              >
                <Flash size="20" style={{ marginRight: '15px' }} />
                Campaign
              </button>
            </div>
            <div className='menu-group-2'>
              <button
                className={`menu-btn ${activeButton === 'Settings' ? 'menu-btn-active' : ''}`}
                onClick={() => handleButtonClick('Settings')}
              >
                <Setting3 size="20" style={{ marginRight: '15px' }} />
                Settings
              </button>
              <button
                className={`menu-btn ${activeButton === 'Help' ? 'menu-btn-active' : ''}`}
                onClick={() => handleButtonClick('Help')}
              >
                <Danger size="20" style={{ marginRight: '15px' }} />
                Help?
              </button>
            </div>

            {/* Check if user is paid member */}
            {userDetails.paidMember ?
              <></>
              :
              <div className='free-trial-window'>
                <div className='free-trial-inner-box'>
                  <h3>Your free trial is about to end in </h3> <h2>{userDetails.daysLeft} days</h2>
                  <p className='trial-text'>You will not be billed during your free trial. <br /><br />To keep your projects running after the trial end, upgrade to a paid option.</p>
                  <button className='upgrade-btn' onClick={() => handleUpgrade()} >Upgrade</button>
                </div>
              </div>
            }


            <div className='menu-group-3'>
              <button
                className={`menu-btn ${activeButton === 'Log Out' ? 'menu-btn-active' : ''}`}
                onClick={() => handleLogOut()}
              >
                <LogoutCurve size="20" style={{ marginRight: '15px' }} />
                Log Out
              </button>
            </div>
          </div>
        </div>
      }
      {result}
    </div>
  )
}

export default Sidebar;