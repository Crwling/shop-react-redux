import React from 'react'

import BasketCart from '../basketCart/basket'
import Search from '../search'
import Categories from '../categories'

const Sidebar = () => {
    return (
        <div>
            <BasketCart/>
            <Search/>
            <Categories/>
        </div>
    )
}

export default Sidebar
