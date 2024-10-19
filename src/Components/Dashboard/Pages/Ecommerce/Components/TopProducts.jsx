import React, { memo } from 'react'
import { productsTableData, productsTableHead, totalSales } from '../../../../../Database/db'
import { Dot } from 'lucide-react';
import { useSelector } from 'react-redux';
import { donutChart, donutChartDark } from '../../../../../assets';
import Chart from './Chart';

const TopProducts = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    return (
        <main className='grid gap-5 grid-cols-1 md:grid-cols-4'>
            <div className='md:col-span-3 bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5 animate-fade'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Top Selling Products</h6>

                {/* Top Selling Products table */}
                <div className="relative overflow-x-auto mt-2">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead>
                            <tr className='border-b-[1px] p-3 dark:border-b-[#FFFFFF33]'>
                                {
                                    productsTableHead?.map((d, i) => (
                                        <th key={i} className='text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs py-2'>{d.label}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsTableData?.map((d, i) => (
                                    <tr key={i} className=" hover:bg-[#F7F9FB] dark:hover:bg-[#FFFFFF0D] group">
                                        <td className="pr-6 py-2 text-start font-normal text-primary dark:text-[#FFFFFF] text-xs whitespace-nowrap">
                                            {d?.name}
                                        </td>
                                        <td className="pr-6 py-2 text-start font-normal text-primary dark:text-[#FFFFFF] text-xs whitespace-nowrap">
                                            {d?.price}
                                        </td>
                                        <td className="pr-6 py-2 text-start font-normal text-primary dark:text-[#FFFFFF] text-xs whitespace-nowrap">
                                            {d?.quantity}
                                        </td>
                                        <td className="pr-6 py-2 text-start font-normal text-primary dark:text-[#FFFFFF] text-xs whitespace-nowrap">
                                            {d?.amount}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='md:col-span-1 bg-[#F7F9FB] rounded-2xl p-5 h-fit dark:bg-[#FFFFFF1A] animate-fade'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Total Sales</h6>
                <div className='mt-2'>
                    {/* Donut Chart svg image */}
                    <div className='w-[120px] h-[120px]  rounded-full mx-auto my-2'>
                        <img src={appTheme ? donutChartDark : donutChart} alt="" className='w-full h-full object-cover' />
                    </div>
                    {/* Donut Chart package */}
                    {/* <Chart /> */}

                    {/* Total Sales graph UI */}
                    {
                        totalSales?.map((d, i) => (
                            <div className='flex justify-between items-center py-2 last:pb-0' key={i}>
                                <div className='flex items-center'>
                                    <Dot size={14} strokeWidth={6} className={`${d?.color}`} />
                                    <p className='text-xs font-normal text-[#1C1C1C] dark:text-[#FFFFFF]'>{d?.by}</p>
                                </div>
                                <p className='text-xs font-normal text-[#1C1C1C] dark:text-[#FFFFFF]'>{d?.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default memo(TopProducts);