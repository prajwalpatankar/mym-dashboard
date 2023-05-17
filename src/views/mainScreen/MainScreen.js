import React, { useEffect, useState } from 'react';
import './MainScreen.css'
import { Calendar, ArrowSquareDown } from 'iconsax-react';
import DoughnutGraph from './graphs/DoughnutGraph';
import SpiderGraph from './graphs/SpiderGraph';
import { Dropdown } from 'antd';
import RecentActivity from './recentActivity/RecentActivity';
import { Col, Container, Row } from 'react-bootstrap';


const MainScreen = (props) => {

    // Storing campaign stats
    const [stats, setStats] = useState({
        invitationsSent: 0,
        pendingInvitations: 0,
        profileViews: 0
    })

    useEffect(() => {
        // Some logic here to get campaign stats and update state
        setStats({
            invitationsSent: 286,
            pendingInvitations: 12,
            profileViews: 2891,
            campaign1: 12432,
            campaign2: 12234,
        })
    }, [stats])


    // Store data range for stats
    const [dateRange, setDateRange] = useState('Mar 10 - Apr 10');

    // Handling Data change
    const getGraphDetails = (period) => {
        //Some Logic / Request to get activity details of 'period'
        setDateRange(period);
    }

    // Items for dropdown for dates.
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
        <div className={`main-screen${smallWindow ? '-small' : ''} `}>
            <div className='main-titlebar'>
                <h3 className='main-titlebar-title'>Campaign Analytics</h3>
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
            <Container >
                <Row>
                    <Col lg={1} />
                    <Col lg={4} style={{ maxHeight: '300px' }}>
                        <DoughnutGraph /><br />
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

                    </Col>
                    <Col lg={2} />
                    <Col lg={4} style={{ maxHeight: '300px' }}>
                        <SpiderGraph /><br />
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
                    </Col>
                    <Col lg={1} />
                </Row>
                <Row>

                </Row>
            </Container> <br />
            <br />
            <RecentActivity />
        </div>
    )
}

export default MainScreen;