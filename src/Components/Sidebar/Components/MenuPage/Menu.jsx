import React from 'react';
import Items from './Items';

const Menu = ({ pageMenus }) => {
    return (
        <div className='h-[400px] py-3'>
            {
                pageMenus?.children?.map((data, i) => (<Items data={data} key={i} />))
            }
        </div>
    )
}

export default Menu;