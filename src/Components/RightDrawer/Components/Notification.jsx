import React from 'react'
import Header from '../Common/Header'
import { notification } from '../../../Database/db'
import MessageTime from '../Common/MessageTime'

const Notification = () => {
    return (
        <div className='text-start'>
            <Header label='Notifications' />
            {
                notification?.map((d, i) => (
                    <div className='cursor-pointer grid grid-cols-6 gap-2 mb-2 last:mb-0 items-start transition-transform hover:scale-105 duration-500 ease-in-out' key={i}>
                        <figure className={`w-[24px] h-[24px] flex items-center justify-center ${d?.color} p-[4px] rounded-md`}>
                            <d.icon size={16} strokeWidth={1.5} className="text-primary" />
                        </figure>
                        <MessageTime message={d?.message} time={d?.time} />
                    </div>
                ))
            }
        </div>
    )
}

export default Notification