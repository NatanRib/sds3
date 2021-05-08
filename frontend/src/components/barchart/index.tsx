import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SalesSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[]
}

type BarChartData = {
    labels: {
        categories: string[]
    }
    series: SeriesData[]
}

const BarChart = () => {

    const [barChartData, setBarChartData] = useState<BarChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })

    useEffect(()=> {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then
            (response => {
                const data = response.data as SalesSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(x.dealsSum * 100 / x.visitedSum, 1));
                setBarChartData({labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Secesso",
                        data: mySeries
                    }
                ]})
            })
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: barChartData.labels, }}
            series={barChartData.series}
            type='bar'
            height='240'
        />
    );
}

export default BarChart;
