import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Dashboard from './dashboard/Dashboard';
import Navbar from './Navbar';
import MainScreen from './mainScreen/MainScreen';


// import './Frame.css'

const Frame = (props) => {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <MainScreen />
        </div>
    )
}

export default Frame;