import React, { lazy, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from "@material-tailwind/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { AlignRight, AppWindow, Bell, Moon, Search, Star, Sun, TimerReset } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import searchIcon from "../../../assets/Icons/searchIcon.png"
import { handleTheme } from '../../../Redux/themeSlice';
import { image4 } from '../../../assets';
import Notification from '../../NotificationPanel/Components/Notification';
import Contacts from '../../NotificationPanel/Components/Contacts';
import Activities from '../../NotificationPanel/Components/Activities';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const appTheme = useSelector(d => d.theme?.mode ?? false);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        searchParam: "",
        showNav: "translate-y-0 ",
        lastScrollY: 0,
        isDrawerOpen: {},
    })

    useEffect(() => {
        if (appTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [appTheme]);

    const animateNavbar = () => {
        let { lastScrollY } = state;
        if (window.scrollY > 80) {
            if (window.scrollY > lastScrollY) {
                setState((prev) => {
                    return {
                        ...prev,
                        showNav: "-translate-y-[80px]",
                    };
                });
            } else {
                setState((prev) => {
                    return {
                        ...prev,
                        showNav: "bg-[#FFFFFF] dark:bg-primary",
                    };
                });
            }
        } else {
            setState((prev) => {
                return {
                    ...prev,
                    showNav: "translate-y-0",
                };
            });
        }
        setState((prev) => {
            return {
                ...prev,
                lastScrollY: window.scrollY,
            };
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", animateNavbar);
        return () => {
            window.removeEventListener("scroll", animateNavbar);
        };
    }, [state.lastScrollY]);

    const updateInput = (e) => {
        setState((prev) => {
            return {
                ...prev,
                searchParam: e.target.value
            }
        })
    }

    //open or close drawer
    const handleDrawer = (open, key) => {
        setState((prev) => {
            return {
                ...prev,
                isDrawerOpen: {
                    [key]: open
                },
            };
        });
    }

    let icons = [
        {
            icon: TimerReset
        },
        {
            icon: Bell
        },
        {
            icon: AppWindow
        }
    ]

    const urlBarString = location?.pathname?.split("/")?.filter((d) => d);
    return (
        <>
            <div className={`flex items-center justify-between border-b-[1px] border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF33] p-4 z-10 sticky top-0 transition-transform duration-500 ${state?.showNav} `}>
                <div className='flex items-center gap-2 md:gap-4'>
                    <AppWindow size={24} strokeWidth={1.5} className="hidden md:flex text-primary dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                    <Star size={24} strokeWidth={1.5} className="hidden md:flex text-primary dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                    <Breadcrumb />

                    {/* // for mobile responsive - dashboard and order list tab provided for navigation mobile */}
                    <img src={image4} alt="" className='md:hidden flex w-[20px] h-[20px] rounded-full object-cover' />
                    <div className='flex md:hidden items-center gap-2'>
                        <p className={`cursor-pointer text-xs font-normal  rounded-full px-2 py-1 ${!urlBarString[0] ? ' bg-[#E3F5FF] text-primary' : ' bg-[#F7F9FB] dark:bg-[#FFFFFF1A] dark:text-[#FFFFFF]'}`} onClick={() => navigate('/')}>Dashboards</p>
                        <p className={`cursor-pointer text-xs font-normal  rounded-full px-2 py-1 ${urlBarString[0] === 'orders' ? ' bg-[#E3F5FF] text-primary' : ' bg-[#F7F9FB] dark:bg-[#FFFFFF1A] dark:text-[#FFFFFF]'}`} onClick={() => navigate('/orders')}>Order List</p>
                    </div>
                </div>
                <div className='hidden md:flex items-center gap-2 md:gap-4'>
                    <div className='flex items-center bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A] gap-1 px-2 py-1 rounded-lg'>
                        <Search size={14} strokeWidth={2} className="text-[#1C1C1C33] dark:text-[#FFFFFF33]" />
                        <input
                            type="text"
                            value={state.searchParam}
                            placeholder='Search'
                            onChange={(e) => updateInput(e)}
                            className='text-[#1C1C1C33] dark:text-[#FFFFFF33] border-none outline-none bg-transparent  w-[100px]  text-xs opacity-[0.6]'
                        />
                           <img src={searchIcon} alt="Icon description" />
                    </div>
                    {
                        appTheme ?
                            <Moon onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] transition-transform hover:scale-125 duration-500 ease-in-out" />
                            : <Sun onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C]  p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]  transition-transform hover:scale-125 duration-500 ease-in-out" />
                    }
                    {
                        icons?.map((d, i) => <d.icon key={i} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] transition-transform hover:scale-125 duration-500 ease-in-out" />)
                    }
                </div>
                <div className='md:hidden flex items-center gap-2 md:gap-4'>
                    {
                        appTheme ?
                            <Moon onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                            : <Sun onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C]  p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]  " />
                    }
                    <AlignRight onClick={() => handleDrawer(true, 'right')} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                </div>
            </div>

            {/* //right drawer implemented */}
            <Drawer
                placement='right'
                open={state.isDrawerOpen['right'] || false}
                onClose={() => handleDrawer(false, '')}
                className=''
            >
                <div className='h-full p-5 dark:bg-primary '>
                    <div className='grid gap-y-4'>
                        <Notification />
                        <Activities />
                        <Contacts />
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default memo(Header);