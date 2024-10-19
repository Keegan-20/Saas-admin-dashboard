import React from 'react'
import { revenueByLocation } from '../../../../../../../Database/db'
import { useSelector } from 'react-redux';
import { worldMap, worldMapDark } from '../../../../../../../assets';

const RevenueByLocation = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    return (
        <>
            <div className='col-span-full md:col-span-1 bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5 h-full animate-fade'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Revenue by Location</h6>
                <div>
                    <div className='w-full  rounded-md mx-auto my-2'>
                        <img src={appTheme ? worldMapDark : worldMap} alt="" className='w-full' />
                    </div>
                    {
                        revenueByLocation?.map((d, i) => (
                            <div key={i} className='pt-3 pb-1 relative'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <p className='text-xs font-normal text-[#1C1C1C] dark:text-[#FFFFFF]'>{d?.place}</p>
                                    </div>
                                    <p className='text-xs font-normal text-[#1C1C1C] dark:text-[#FFFFFF]'>{d?.revenue}K</p>
                                </div>
                                <div className='absolute bottom-0 w-full'>
                                    <div className="relative h-[2px] rounded-full bg-[#E5ECF6] dark:bg-[#FFFFFF66]">
                                        <div className="h-full  rounded-full bg-[#A8C5DA] dark:bg-[#A8C5DA]" style={{ width: `${d?.revenue}%` }}>
                                            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className="relative h-[2px] rounded-full bg-[#E5ECF6]">
                <div className="h-full  rounded-full bg-[#A8C5DA]" style={{ width: "75%" }}>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white"></span>
                </div>
            </div> */}
        </>
    )
}

export default RevenueByLocation