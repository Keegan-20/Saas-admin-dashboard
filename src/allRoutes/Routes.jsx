import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

const Sidebar = lazy(() => import('../Components/Sidebar'));
const NotificationPanel = lazy(() => import('../Components/NotificationPanel'));
const Header = lazy(() => import("../Components/Dashboard/Components/Header"));


export default function Routes(props) {

    return (
        <ErrorBoundary>
            <section className='font-Inter scroll-smooth grid grid-cols-12 items-start dark:bg-primary h-full animate-fade'>
                <Sidebar />
                <div className='col-span-12 xl:col-span-8 border-x-[1px] border-x-[#1C1C1C1A] dark:border-x-[#FFFFFF33]'>
                    <Header />
                    
                </div>
                <NotificationPanel />
            </section>
        </ErrorBoundary>
    );
}
