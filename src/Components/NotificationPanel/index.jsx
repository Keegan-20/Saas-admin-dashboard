import React, { memo } from 'react'
import Notification from './Components/Notification'
import Activities from './Components/Activities'
import Contacts from './Components/Contacts'

const NotificationPanel = () => {
    return (
        <div className='col-span-2 p-5 hidden mb-10 h-auto xl:grid gap-y-4 sticky top-0'>
            <Notification />
            <Activities />
            <Contacts />
        </div>
    )
}

export default memo(NotificationPanel);