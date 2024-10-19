import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {

    const [chartData] = useState({
        series: [38, 28, 26, 5],
        options: {
            chart: {
                type: 'donut',
            },
            labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
            colors: ['#1C1C1C', '#BAEDBD', '#95A4FC', '#B1E3FF'],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
            responsive: [{
                breakpoint: 400,
                options: {
                    chart: {
                        width: 200
                    },
                }
            }],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    });

    return (
        <div className="w-full mx-auto overflow-hidden flex justify-center">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                height={350}
            />
        </div>
    );
};

export default Chart;
