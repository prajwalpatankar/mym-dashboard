import React, { useEffect, useState, useRef } from 'react';
import './MainScreen.css'
import { Calendar, ArrowSquareDown, I3Square } from 'iconsax-react';

import Chart from 'chart.js/auto';
import DoughnutGraph from './graphs/DoughnutGraph';
import SpiderGraph from './graphs/SpiderGraph';

const MainScreen = (props) => {

    const [dateRange, setDateRange] = useState('Mar 10 - Apr 10');


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
        })
    }, stats)

    const activityTypes = [
        'message',
        'connection request',
        'Upcoming Task -'
    ]
    const [activities, setActivities] = useState([])


    useEffect(() => {
        setActivities(
            [
                {
                    type: 0,
                    actor: 'Alex Morgan',
                    icon: '/playground_assets/ellipse51201-q5pp-200h.png',
                    description: '',
                },
                {
                    type: 1,
                    actor: 'Mujo Prosper',
                    icon: '/playground_assets/ellipse61202-kdgs-200h.png',
                    description: '',
                },
                {
                    type: 2,
                    actor: 'Create a campaign for designers',
                    icon: '/playground_assets/ellipse51201-q5pp-200h.png',
                    description: '02/04/2023',
                },
                {
                    type: 2,
                    actor: 'Create a campaign for developers',
                    icon: '',
                    description: '02/24/2023',
                },
                {
                    type: 0,
                    actor: 'Alex Morgan',
                    icon: '/playground_assets/ellipse51201-q5pp-200h.png',
                    description: '',
                },
            ])
    }, activities)


    return (
        <div className='main-screen'>
            <div className='main-titlebar'>
                <h3 className='main-titlebar-title'>Campaign Analytics</h3>
                <p className='main-titlebar-calendar'><Calendar /> &nbsp;{dateRange}&nbsp; <ArrowSquareDown /></p>
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
            <br />
            <div className='recent-activity-titlebar'>
                <h3 className='recent-activity-title'>Recent Activity</h3>
                <p className='recent-activity-calendar'> Last 24h <ArrowSquareDown /></p>
            </div>
            <div className='activity-list'>
                {activities.map((activity, index) => (
                    <div className='activity-list-item'>
                        {activity.type === 0 ?
                            <div className='activity-list-item-inner'>
                                <div className='activity-item-img' >
                                    <img src={activity.icon} />
                                </div>
                                <b>{activity.actor}</b>&nbsp;sent you a&nbsp;<b>{activityTypes[activity.type]}</b>.
                            </div>
                            :
                            activity.type === 1 ?
                                <div className='activity-list-item-inner'>
                                    <div className='activity-item-img' >
                                        <img src={activity.icon} />
                                    </div>
                                    <b>{activity.actor}</b>&nbsp;sent you a&nbsp;<b>{activityTypes[activity.type]}</b>.
                                </div>
                                :
                                <div className='activity-list-item-inner'>
                                    <div className='activity-item-img' >
                                        <I3Square size="20" />
                                    </div>
                                    {activityTypes[activity.type]}&nbsp;<b>{activity.actor}</b>&nbsp;due on&nbsp;<b>{activity.description}</b>.
                                </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainScreen;