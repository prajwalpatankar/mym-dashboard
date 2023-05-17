import React from 'react';
import './Campaign.css'

import { Flash } from 'iconsax-react';
import { message } from 'antd';


const Campaign = (props) => {

  const handleNewCampaign = () => {
    // Some logic to handle new campign

    message.info("This Feature is not available yet");
  }

  return (
    <div className='campaign'>
       <h2 className='campaign-title'>Campaign</h2>
       <button className='new-campaign-btn' onClick={() => handleNewCampaign()} ><Flash /> New Campaign</button>
    </div>
  )
}

export default Campaign;