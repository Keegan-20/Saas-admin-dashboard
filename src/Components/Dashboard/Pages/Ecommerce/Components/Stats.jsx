import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux';
import { TrendingDown, TrendingUp } from 'lucide-react'
import ReactApexChart from "react-apexcharts";
import { stats } from '../../../../../Database/db'
import { BarChart, BarChartDark } from '../../../../../assets';

const Stats = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    const [chartData] = useState({
        series: [
            {
                name: "Sales",
                data: [120, 100, 200, 90, 170, 160]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 200,
                toolbar: {
                    show: true,
                    tools: {
                        download: false
                    }
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                labels: {
                    style: {
                        colors: '#A8C5DA',
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#A8C5DA',
                    },
                },
            },
            colors: '#A8C5DA',
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false,
                colors: '#BAEDBD',
            },
            legend: {
                show: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },

            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "M";
                    }
                }
            }
        },

    });

    return (
        <section className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade'>
                {
                    stats?.map((d, i) => (
                        <div className={`${d?.bg} rounded-2xl p-5 flex justify-around flex-col transition-transform hover:scale-105 duration-500 ease-in-out`} key={i}>
                            <h6 className={`text-sm font-semibold ${d?.color} mb-1 hover:bg-[#1C1C1C0D] rounded-md`}>{d?.name}</h6>
                            <div className='transition ease-in-out delay-150 flex items-center justify-between hover:bg-[#1C1C1C0D] rounded-md hover:flex-row-reverse hover:delay-300 '>
                                <h6 className={`text-2xl font-semibold ${d?.color}`}>{d?.revenue}</h6>
                                <div className='flex items-center gap-2'>
                                    <p className={`text-xs font-normal ${d?.color}`}>{d?.profitLoss}</p>
                                    {
                                        d?.status ?
                                            <TrendingUp size={14} strokeWidth={1.5} className={`${d?.color}`} /> :
                                            <TrendingDown size={14} strokeWidth={1.5} className={`${d?.color}`} />
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5 animate-fade'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Projections vs Actuals</h6>
                {/* BarChart svg image */}
                {/* <figure className='w-full h-full my-3'>
                    <img src={appTheme ? BarChart : BarChartDark} alt="" className='w-full my-2' />
                </figure> */}

                {/* barchart package implementation */}
                <div className="w-full mx-auto overflow-hidden">
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="bar"
                        height={150}
                        className='w-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default memo(Stats);