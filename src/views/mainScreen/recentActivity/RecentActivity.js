import React, { useEffect, useState } from 'react';
import './RecentActivity.css';
import { Dropdown } from 'antd';
import { ArrowSquareDown, I3Square } from 'iconsax-react';


const RecentActivity = (props) => {

    // Storing types of activities to reuse
    const activityTypes = [
        'message',
        'connection request',
        'Upcoming Task -'
    ]

    // Store activities
    const [activities, setActivities] = useState([])


    useEffect(() => {
        // Some logic to get activity details and update state

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
    }, [activities])


    // state to store period for activity
    const [activityPeriod, setActivityPeriod] = useState('Last 24h');

    // Handling period change and updating list of activities
    const getActivityDetails = (period) => {
        //Some Logic / Request to get activity details of 'period'
        setActivityPeriod(period);
    }

    // Activity Time period 
    const items = [
        {
            label: (
                <div onClick={() => getActivityDetails('Last 24h')}>
                    Last 24h
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div onClick={() => getActivityDetails('Last week')}>
                    Last week
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div onClick={() => getActivityDetails('Last month')}>
                    Last month
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <div onClick={() => getActivityDetails('Last year')}>
                    Last year
                </div>
            ),
            key: '3',
        },
    ];


    return (
        <div className='recent-activities'>
            <div className='recent-activity-titlebar'>
                <h3 className='recent-activity-title'>Recent Activity</h3>
                <p className='recent-activity-calendar'> {activityPeriod} &nbsp;
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
            <div className='activity-list'>
                {activities.map((activity, index) => (
                    <div className='activity-list-item'>
                        {activity.type === 0 ?
                            <div className='activity-list-item-inner'>
                                <div className='activity-item-img' >
                                    <img src={activity.icon} alt='profile' />
                                </div>
                                <b>{activity.actor}</b>&nbsp;sent you a&nbsp;<b>{activityTypes[activity.type]}</b>.
                            </div>
                            :
                            activity.type === 1 ?
                                <div className='activity-list-item-inner'>
                                    <div className='activity-item-img' >
                                        <img src={activity.icon} alt='profile' />
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

export default RecentActivity;


