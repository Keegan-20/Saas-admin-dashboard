import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Items = ({ data }) => {
    const [state, setState] = useState({
        isOpen: false
    })

    //open for children menu 
    const viewChildMenu = () => (
        setState((prev) => {
            return {
                ...prev,
                isOpen: !state.isOpen
            }
        })
    )

    return (
        <div className={` mb-1 `}>
            <div className='flex items-center pl-5 py-[2px] rounded-[8px] cursor-pointer ' onClick={() => data?.children?.length !== 0 && viewChildMenu()}>
                {data?.children && <ChevronRight size={14} strokeWidth={1.5} className={`text-[#1C1C1C33] dark:text-[#FFFFFF33]  ${state.isOpen ? 'rotate-90' : ''}`} />}
                {
                    data.icon && <data.icon size={16} strokeWidth={1.5} className="text-primary dark:text-[#FFFFFF]" />
                }
                <p className='text-sm font-normal pl-1 line-clamp-1 dark:text-[#FFFFFF] transition-transform hover:scale-105 duration-500 ease-in-out'>{data?.name}</p>
            </div>
            {
                (data?.children && state.isOpen) &&
                <div className={`overflow-hidden pl-8`}>
                    {data?.children?.map((data, i) => <Items data={data} key={i} />)}
                </div>
            }
        </div>
    )
}

export default Items