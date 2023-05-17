import React, { useEffect, useState } from 'react';
import './MainScreen.css'
import { Calendar, ArrowSquareDown } from 'iconsax-react';
import DoughnutGraph from './graphs/DoughnutGraph';
import SpiderGraph from './graphs/SpiderGraph';
import { Dropdown } from 'antd';
import RecentActivity from './recentActivity/RecentActivity';


const MainScreen = (props) => {

    const [stats, setStats] = useState({
        invitationsSent: 0,
        pendingInvitations: 0,
        profileViews: 0
    })

    useEffect(() => {
        setStats({
            invitationsSent: 286,
            pendingInvitations: 12,
            profileViews: 2891,
            campaign1: 12432,
            campaign2: 12234,
        })
    }, [stats])

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleArrowClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Additional logic if needed
    };



    const [dateRange, setDateRange] = useState('Mar 10 - Apr 10');

    const getGraphDetails = (period) => {
        //Some Logic / Request to get activity details of 'period'
        setDateRange(period);
    }

    const items = [
        {
            label: (
                <div onClick={() => getGraphDetails('Mar 10 - Apr 10')}>
                    Mar 10 - Apr 10
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div onClick={() => getGraphDetails('Feb 10 - Mar 10')}>
                    Feb 10 - Mar 10
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div onClick={() => getGraphDetails('Jan 10 - Feb 10')}>
                    Jan 10 - Feb 10
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <div onClick={() => getGraphDetails('Dec 10 - Jan 10')}>
                    Dec 10 - Jan 10
                </div>
            ),
            key: '3',
        },
    ];

    return (
        <div className='main-screen'>
            <div className='main-titlebar'>
                <h3 className='main-titlebar-title'>Campaign Analytics</h3>
                {/* <p className='main-titlebar-calendar'><Calendar /> &nbsp;{dateRange}&nbsp; <ArrowSquareDown /></p> */}

                <p className='main-titlebar-calendar'><Calendar /> &nbsp;{dateRange}&nbsp;
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <div onClick={(e) => e.preventDefault()}>
                            <ArrowSquareDown />
                        </div>
                    </Dropdown>
                </p>
            </div>
            <div className='main-stats'>
                <div className='main-stat-item'>
                    <div className='main-stat-title'>
                        Invitations sent
                    </div>
                    <div className='main-stat-text'>
                        {stats.invitationsSent}
                    </div>
                </div>
                <div className='main-stat-item'>
                    <div className='main-stat-title'>
                        Pending Invitations
                    </div>
                    <div className='main-stat-text'>
                        {stats.pendingInvitations}
                    </div>
                </div>
                <div className='main-stat-item'>
                    <div className='main-stat-title'>
                        Profile Views
                    </div>
                    <div className='main-stat-text'>
                        {stats.profileViews}
                    </div>
                </div>

            </div>
            <br />
            <div className='main-graphs'>
                <div className='doughnut-graph'>
                    <DoughnutGraph />
                </div>
                <div className='spider-graph'>
                    <SpiderGraph />
                </div>
            </div>
            <div className='graph-legends'>
                <div className='legend-container'>
                    <div>
                        <div className='legend-text'>
                            <p className='legend-black'>&nbsp;</p>
                            Invitations Sent
                        </div>
                        <div className='legend-number'>
                            {stats.invitationsSent}
                        </div>
                    </div>
                    <div>
                        <div className='legend-text'>
                            <p className='legend-green'>&nbsp;</p>
                            Pending Invitations
                        </div>
                        <div className='legend-number'>
                            {stats.pendingInvitations}
                        </div>
                    </div>
                    <div>
                        <div className='legend-text'>
                            <p className='legend-purple'>&nbsp;</p>
                            Profile Views
                        </div>
                        <div className='legend-number'>
                            {stats.profileViews}
                        </div>
                    </div>
                </div>
                <div className='legend-container'>
                    <div>
                        <div className='legend-text'>
                            <p className='legend-green-hollow'>&nbsp;</p>
                            Campaign 1
                        </div>
                        <div className='legend-number'>
                            {stats.campaign1}
                        </div>
                    </div>
                    <div>
                        <div className='legend-text'>
                            <p className='legend-purple-hollow'>&nbsp;</p>
                            Campaign 2
                        </div>
                        <div className='legend-number'>
                            {stats.campaign2}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <RecentActivity />
        </div>
    )
}

export default MainScreen;