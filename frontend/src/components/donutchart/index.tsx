import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import {SalesSum} from 'types/sale';

type ChartData = {
    series: number[],
    labels: string[]
}

const DonutChart = () => {

    //FORMA ERRADA
    let chartData : ChartData = {series: [], labels: []}

    axios.get(`${BASE_URL}/sales/sales-by-seller`).then
        (result =>{
            const data = result.data as SalesSum[];
            const mySeries = data.map(x => x.salesSum);
            const myLabels = data.map(x => x.sellerName);
            chartData = {series: mySeries, labels: myLabels};
            console.log(chartData);
        })
    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{...options, labels: chartData.labels, }}
            type='donut'
            series={chartData.series}
            height='240'
        />
    );
}

export default DonutChart;
