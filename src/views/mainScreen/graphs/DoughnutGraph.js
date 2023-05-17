import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';



const DoughnutGraph = (props) => {

    const doughnutData = {
        labels: ['Invitations sent', 'Pending invitations', 'Profile views'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#1F1F1F', '#C2ECC1', '#C5C7F6'],
                hoverBackgroundColor: ['#3F3F3F', '#B2DCB1', '#B5B7E6'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <Doughnut data={doughnutData} options={options} style={{maxHeight: '270px', maxWidth:'270px'}} />
    )
}

export default DoughnutGraph;
