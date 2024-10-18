import React from 'react'

const MessageTime = ({ message, time }) => {
    return (
        <div className='text-start col-span-5'>
            <p className='text-sm font-normal text-primary line-clamp-1 dark:text-[#FFFFFF]'>{message}</p>
            {
                time &&
                <p className='text-xs font-normal text-[#1C1C1C66] line-clamp-1 dark:text-[#FFFFFF66]'>{time}</p>
            }
        </div>
    )
}

export default MessageTime