import React from 'react';
import { useSelector } from 'react-redux';
import { areaChart, areaChartDark } from '../../../../../../../assets';
import { Dot } from 'lucide-react';

const RevenueChart = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    let weeklyRevenue = [
        {
            label: "<p class='text-xs font-normal dark:text-[#FFFFFF]'>Current Week  <b> $58,211 </b><p>",
            color: 'text-[#1C1C1C] dark:text-[#C6C7F8]'
        },
        {
            label: "<p class='text-xs font-normal dark:text-[#FFFFFF]'>Previous Week  <b> $68,768 </b><p>",
            color: 'text-[#A8C5DA] dark:text-[#A8C5DA]'
        }
    ]

    return (
        <>
            <div className='col-span-full md:col-span-3 bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5 animate-fade'>
                <div className='block md:flex items-center'>
                    <h6 className='text-sm font-semibold dark:text-[#FFFFFF] flex'>Revenue <span className='dark:text-[#FFFFFF33] mx-3 text-[#1C1C1C33] hidden md:flex'>|</span> </h6>
                    <div className='block md:flex items-center gap-3 mt-1 md:m-0'>
                        {
                            weeklyRevenue?.map((d, i) => (
                                <div key={i} className='flex items-center '>
                                    <Dot size={14} strokeWidth={6} className={`${d?.color}`} />
                                    <div dangerouslySetInnerHTML={{ __html: d?.label, }}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <figure className='w-full h-full '>
                    <img src={appTheme ? areaChartDark : areaChart} alt="" className='w-full my-3' />
                </figure>
            </div>
        </>
    );
};

export default RevenueChart;
