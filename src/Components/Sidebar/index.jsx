import React, { Suspense, lazy, memo } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import FallbackLoading from '../FallbackLoading/FallbackLoading';
const Dashboard = lazy(() => import('./Components/Dashboard'));
const MenuPage = lazy(() => import('./Components/MenuPage'));


const NotificationPanel = () => {
    let tabs = [
        {
            name: 'Favorites',
            slug: 'favorites',
            color: 'text-[#1C1C1C66] dark:text-[#FFFFFF66]'
        },
        {
            name: 'Recently',
            slug: 'recently',
            color: 'text-[#1C1C1C33] dark:text-[#FFFFFF33]'
        },
    ]

    let segments = [
        {
            name: 'Overview',
        },
        {
            name: 'Projects',
        },
    ]

    return (
        <ErrorBoundary>
            <section className='hidden md:col-span-2 py-5 px-4 xl:grid gap-y-4 sticky top-0 animate-fade'>
                <figure className='flex items-center'>
                    <img src="https://framerusercontent.com/images/GCFgMvkEdGKHPs31ezbHUFXr1A.png" alt="" className='w-[24px] h-[24px] rounded-full' />
                    <h1 className='text-sm font-normal ps-2 dark:text-[#FFFFFF]'>ByeWind</h1>
                </figure>
                <div className=''>
                    <div className='flex items-center gap-2'>
                        {
                            tabs?.map((d, i) => (
                                <p key={i} className={`flex justify-center text-sm font-normal ${d.color} cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] rounded-lg p-1 px-2`}>{d.name}</p>
                            ))
                        }
                    </div>
                    <div className=''>
                        {
                            segments?.map((d, i) => (
                                <div key={i} className='flex items-center p-1 px-2  cursor-pointer'>
                                    <div className='w-[5px] h-[5px] bg-[#1C1C1C33] rounded-full dark:bg-[#FFFFFF66]'></div>
                                    <p className='flex justify-center text-sm font-normal  text-primary pl-2 dark:text-[#FFFFFF]'>
                                        {d.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Suspense fallback={<FallbackLoading />}>
                    <Dashboard />
                    <MenuPage />
                </Suspense>
            </section>
        </ErrorBoundary>
    )
}

export default memo(NotificationPanel);