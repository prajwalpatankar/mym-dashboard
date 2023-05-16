import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const SpiderGraph = (props) => {


    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current;
        let chartInstance = null;

        const spiderData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Campaign 1',
                    data: [40, 70, 60, 50, 20, 80, 74],
                    backgroundColor: '#C5C7F64D',
                    borderColor: '#C5C7F6',
                    borderWidth: 0.72071,
                },
                {
                    label: 'Campaign 2',
                    data: [70, 30, 50, 35, 70, 60, 60],
                    backgroundColor: '#C2ECC14D',
                    borderColor: '#C2ECC1',
                    borderWidth: 0.72071,
                },
            ],
        };

        const spiderOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false, // Hide the legend
            },
            scale: {
                angleLines: {
                    display: true,
                },
                ticks: {
                    min: 0,
                    max: 100,
                    beginAtZero: true,
                },
            },
        };

        chartInstance = new Chart(ctx, {
            type: 'radar',
            data: spiderData,
            options: spiderOptions,
        });

        return () => {
            chartInstance.destroy();
        };
    }, []);


    return (
        <canvas ref={chartRef} />
    )
}

export default SpiderGraph;
