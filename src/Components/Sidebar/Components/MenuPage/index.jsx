import React from 'react'
import { pageMenus } from '../../../../mockData/mockdata';
import Menu from './Menu';

const MenuPage = () => {
    return (
        <div>
            <h6 className='text-[#1C1C1C66] text-sm  font-normal ps-2 dark:text-[#FFFFFF66]'>Pages</h6>
            <Menu pageMenus={pageMenus} />
        </div>
    )
}

export default MenuPage;