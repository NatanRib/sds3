import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SalesSum } from 'types/sale';
import { useEffect, useState } from 'react';

type ChartData = {
    series: number[],
    labels: string[]
}

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ series: [], labels: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sales-by-seller`).then
            (result => {
                const data = result.data as SalesSum[];
                const mySeries = data.map(x => x.salesSum);
                const myLabels = data.map(x => x.sellerName);

                setChartData({ series: mySeries, labels: myLabels });
            })
    }, [])

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels, }}
            type='donut'
            series={chartData.series}
            height='240'
        />
    );
}

export default DonutChart;
