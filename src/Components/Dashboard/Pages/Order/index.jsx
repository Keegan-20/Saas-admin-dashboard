import React, { useState, Suspense, memo } from 'react';
import { ArrowDownUp, ChevronLeft, ChevronRight, Plus, Search, Slack, Text } from 'lucide-react';
import FallbackLoading from '../../../../BasicComponents/FallbackLoading';
import OrderTable from './OrderTable';

const Order = () => {
    // let's assume we have 5 page orders lists
    let allOrderPages = [1, 2, 3, 4, 5];

    const [state, setState] = useState({
        checkedData: ['#CM9801', '#CM9803', '#CM9804'],
        checkAll: false,
        page: 1,
        orderName: "",
    })

    //get paginated data by clicking prev and next button
    const getData = (e, type) => {
        e.stopPropagation();
        if (type === 'next') {
            setState((prev) => {
                return {
                    ...prev,
                    page: prev.page + 1
                }
            })
        }
        if (type === 'prev') {
            setState((prev) => {
                return {
                    ...prev,
                    page: prev.page - 1
                }
            })
        }
    }

    //get particular page order list
    const handlePage = (e, d) => {
        e.stopPropagation();

        setState((prev) => {
            return {
                ...prev,
                page: d
            }
        })
    }

    //filter order by name - on search
    const handleSearch = (e) => {
        setState((prev) => {
            return {
                ...prev,
                orderName: e.target.value
            }
        })
    }

    let { page } = state;
    return (
        <Suspense fallback={<FallbackLoading />}>
            <main className='grid gap-y-5 animate-fade'>
                <h2 className='text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]'>Order List</h2>
                <div className='bg-[#F7F9FB] dark:bg-[#FFFFFF1A] flex items-center justify-between p-2 rounded-lg'>
                    <div className='flex items-center gap-4'>
                        <Plus size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] transition-transform hover:scale-125 duration-500 ease-in-out" />
                        <Text size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] transition-transform hover:scale-125 duration-500 ease-in-out" />
                        <ArrowDownUp size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] transition-transform hover:scale-125 duration-500 ease-in-out" />
                    </div>
                    <div className='flex items-center bg-[#FFFFFF] dark:bg-[#1C1C1C66] gap-1 px-2 py-1 rounded-lg border-[1px] border-[#1C1C1C1A] dark:border-[#FFFFFF33]'>
                        <Search size={14} strokeWidth={2} className="text-[#1C1C1C33] dark:text-[#FFFFFF33]" />
                        <input
                            type="text"
                            value={state.orderName}
                            placeholder='Search'
                            onChange={(e) => handleSearch(e)}
                            className='text-[#1C1C1C33] dark:text-[#FFFFFF33] bg-transparent  border-none  outline-none   w-[100px]  text-xs opacity-[0.6]'
                        />
                    </div>
                </div>
                {/* order list table */}
                <OrderTable />

                {/* pagination container */}
                <div className='flex items-center gap-2 justify-center md:justify-end'>
                    <ChevronLeft onClick={(e) => page !== 1 && getData(e, 'prev')} size={24} strokeWidth={1.5} className={`text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md  ${page === 1 ? 'cursor-not-allowed' : ' cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]'} transition-transform hover:scale-125 duration-500 ease-in-out`} />
                    {
                        allOrderPages.map((d, i) => (
                            <p onClick={(e) => handlePage(e, d)} key={i} className={`${page === d ? ' bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]' : ''} cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal w-[24px] h-[24px] rounded-md flex items-center justify-center transition-transform hover:scale-125 duration-500 ease-in-out`}>{d}</p>
                        ))
                    }
                    <ChevronRight onClick={(e) => allOrderPages.length !== page && getData(e, 'next')} size={24} strokeWidth={1.5} className={`text-[#1C1C1C] dark:text-[#FFFFFF]   p-1 rounded-md   ${allOrderPages.length === page ? 'cursor-not-allowed' : ' cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]'} transition-transform hover:scale-125 duration-500 ease-in-out`} />
                </div>
            </main>
        </Suspense>
    )
}

export default memo(Order);