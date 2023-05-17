import React from 'react';
import './Settings.css'
import { Slider } from 'antd';

const Settings = (props) => {



  return (
    <div className='settings'>
      <h2 className='settings-title'>Settings</h2>
      <div className='sliders'>
        Campaign Members
        <Slider defaultValue={80} /><br />
        Campaign Duration
        <Slider defaultValue={30} /><br />
        Campiagn impact
        <Slider defaultValue={40} /><br />
        Campiagn budget
        <Slider defaultValue={70} /><br />
        Campaign something
        <Slider defaultValue={80} /><br />
      </div>
    </div>
  )
}

export default Settings;