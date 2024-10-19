import React, { memo } from 'react'
import RevenueChart from './Components/RevenueChart'
import RevenueByLocation from './Components/RevenueByLocation'

const Revenue = () => {
    return (
        <main className='grid gap-5 grid-cols-1 md:grid-cols-4'>
            <RevenueChart />
            <RevenueByLocation />
        </main>
    )
}

export default memo(Revenue)