import React, { useEffect, useState } from 'react';
import { TrendUp, TrendDown } from 'iconsax-react';
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import Plot from 'react-plotly.js';

import './Dashboard.css'
// import { BarChart } from 'react-bootstrap-icons';

const Dashboard = (props) => {

  const [stats, setStats] = useState({
    connections: 0,
    followers: 0,
    invites: 0,
    connectionsDelta: 0,
    followersDelta: 0,
    invitesDelta: 0,
  })

  const [dataArr, setDataArr] = useState([]);


  const data = {
    labels: ['Connections', 'Follows', 'Connect Invites'],
    datasets: [
      {
        data: dataArr,
        backgroundColor: ['#C2ECC1', '#1F1F1F', '#C5C7F6'],
        hoverBackgroundColor: ['#3F3F3F', '#B2DCB1', '#B5B7E6'],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    setStats({
      connections: 2632,
      followers: 2667,
      invites: 100,
      connectionsDelta: 56,
      followersDelta: 0,
      invitesDelta: 60,
    })
    setDataArr([540, 350, 750]);
  }, [stats])


  return (
    <div className='dashboard'>
      <h2 className='dashboard-title'>Dashboard</h2>
      <div className='statistics'>
        <div className='stats-box'>
          <p className='stat-title'>Connections</p>
          <div className='stat-row'>
            <h3 className='stat-number'>{stats.connections}</h3>
            {stats.connectionsDelta < 0 ?
              <p className='stat-trend stat-red'><TrendDown /> &nbsp;{stats.connectionsDelta}&#37;</p>
              :
              <p className='stat-trend stat-green'><TrendUp /> &nbsp;{stats.connectionsDelta}&#37;</p>
            }
          </div>
        </div>
        <div className='stats-box'>
          <p className='stat-title'>Followers</p>
          <div className='stat-row'>
            <h3 className='stat-number'>{stats.followers}</h3>
            {stats.followersDelta < 0 ?
              <p className='stat-trend stat-red'><TrendDown /> &nbsp;{stats.followersDelta}&#37;</p>
              :
              <p className='stat-trend stat-green'><TrendUp /> &nbsp;{stats.followersDelta}&#37;</p>
            }
          </div>
        </div>
        <div className='stats-box'>
          <p className='stat-title'>Connect Invites</p>
          <div className='stat-row'>
            <h3 className='stat-number'>{stats.invites}</h3>
            {stats.invitesDelta < 0 ?
              <p className='stat-trend stat-red'><TrendDown /> &nbsp;{stats.invitesDelta}&#37;</p>
              :
              <p className='stat-trend stat-green'><TrendUp /> &nbsp;{stats.invitesDelta}&#37;</p>
            }
          </div>
        </div>
      </div>
      <br /><br />
      <div className='bar-graph'>
        <Bar data={data} options={options} />
      </div>
      <div className='legend'>
        <span className='legend-container'>
          <p className='legend-color-green'>&nbsp;</p> Connections
          <p className='legend-color-black'>&nbsp;</p> Follows
          <p className='legend-color-purple'>&nbsp;</p> Connect Invites
        </span>
      </div>
    </div>
  )
}

export default Dashboard;