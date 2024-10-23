import React from 'react';
import { useRoutes } from 'react-router-dom';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import Ecommerce from "../Components/Dashboard/Pages/Ecommerce";
import Order from "../Components/Dashboard/Pages/Order";
import PageNotFound from '../Components/PageNotFound/PageNotFound';
import Sidebar from '../Components/Sidebar'; 
import NotificationPanel from '../Components/NotificationPanel'; 
import Header from "../Components/Dashboard/Components/Header";  

const appRoutes = [
    { path: "/", element: <Ecommerce /> },
    { path: "/orders", element: <Order /> },
    { path: "/*", element: <PageNotFound /> }
];

export default function Routes() {
    const routes = useRoutes(appRoutes);

    return (
        <ErrorBoundary>
            <section className='font-Inter scroll-smooth grid grid-cols-12 items-start dark:bg-primary h-full animate-fade'>
                <Sidebar />
                
                <div className='col-span-12 xl:col-span-8 border-x-[1px] border-x-[#1C1C1C1A] dark:border-x-[#FFFFFF33]'>
                    <Header />
                    
                    <div className='p-4'>
                        {/* the routes object dynamically renders the content based on the current route */}
                        {routes}
                    </div> 
                </div>
                
                <NotificationPanel />
            </section>
        </ErrorBoundary>
    );
}
