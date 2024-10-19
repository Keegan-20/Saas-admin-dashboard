import React, { Suspense, lazy } from 'react';
import FallbackLoading from '../../../../BasicComponents/FallbackLoading';

const Stats = lazy(() => import('./Components/Stats'));
const Revenue = lazy(() => import('./Components/Revenue'));
const TopProducts = lazy(() => import('./Components/TopProducts'));

const Ecommerce = () => {
    return (
        <Suspense fallback={<FallbackLoading />}>
            <div className='grid gap-y-5'>
                <h2 className='text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]'>eCommerce</h2>
                <Stats />
                <Revenue />
                <TopProducts />
            </div>
        </Suspense>
    )
}

export default Ecommerce;