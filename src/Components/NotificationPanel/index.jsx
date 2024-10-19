import React, { memo } from 'react'
import Notification from './Components/Notification'
import Activities from './Components/Activities'
import Contacts from './Components/Contacts'

const RightDrawer = () => {
    return (
        <div className='col-span-2 p-5 hidden  xl:grid gap-y-4 h-auto sticky top-0'>
            <Notification />
            <Activities />
            <Contacts />
        </div>
    )
}

export default memo(RightDrawer);