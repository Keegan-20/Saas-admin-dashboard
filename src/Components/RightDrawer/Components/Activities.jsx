import React from 'react'
import Header from '../Common/Header'
import { activities } from '../../../Database/db';
import MessageTime from '../Common/MessageTime';

const Activities = () => {
    return (
        <div className='text-start'>
            <Header label='Activities' />
            {
                activities?.map((d, i) => (
                    <div className='grid grid-cols-6 gap-2 mb-3 last:mb-0 items-start transition-transform hover:scale-105 duration-500 ease-in-out' key={i}>
                        <figure className='col-span-1 flex items-center justify-center relative w-fit'>
                            <img src={d?.image} alt="" className='w-[24px] h-[24px] rounded-full object-cover' />
                            {
                                (activities?.length - 1 !== i) &&
                                <div className='h-[15px] w-[1px] bg-[#1C1C1C1A] dark:bg-[#FFFFFF1A]  absolute top-[80%] my-2'></div>
                            }
                        </figure>
                        <MessageTime message={d?.message} time={d?.time} />
                    </div>
                ))
            }
        </div>
    )
}

export default Activities;


