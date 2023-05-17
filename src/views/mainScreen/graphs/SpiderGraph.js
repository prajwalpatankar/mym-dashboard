import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const SpiderGraph = (props) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current;
        let chartInstance = null;

        // some logic to get graph data
        let dataCampaign1 = [40, 70, 60, 50, 20, 80, 74];
        let dataCampaign2 = [70, 30, 50, 35, 70, 60, 60];

        // spider graph initializer
        const spiderData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Campaign 1',
                    data: dataCampaign1,
                    backgroundColor: '#C5C7F64D',
                    borderColor: '#C5C7F6',
                    borderWidth: 0.72071,
                },
                {
                    label: 'Campaign 2',
                    data: dataCampaign2,
                    backgroundColor: '#C2ECC14D',
                    borderColor: '#C2ECC1',
                    borderWidth: 0.72071,
                },
            ],
        };

        // spidergraph options
        const spiderOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
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

    return <canvas ref={chartRef} style={{maxHeight: '270px', maxWidth:'270px'}} />;
};

export default SpiderGraph;