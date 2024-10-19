import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Breadcrumb = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const urlBarString = location?.pathname?.split("/")?.filter((d) => d);
    return (
        <div className='hidden md:flex items-center gap-3'>
            <p onClick={() => navigate('/')} className='cursor-pointer text-sm text-[#1C1C1C66] font-normal dark:text-[#FFFFFF66] dark:hover:text-[#FFFFFF]'>Dashboards</p>
            <p className='text-sm text-[#1C1C1C66] font-normal dark:text-[#FFFFFF33]'>/</p>
            <p className='text-sm text-primary font-normal dark:text-[#FFFFFF] capitalize line-clamp-1'>{urlBarString[0] ?? 'Default'}</p>
        </div>
    )
}

export default Breadcrumb;