import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { getCategories } from "../../reducers/categories/selectors"
import { useSelector } from 'react-redux'
import clsx from 'clsx'

const Categories = () => {
    const categories = useSelector(getCategories);

    const { id: categoryId } = useParams();

    const renderCategory = (category, index) => {
        return (
            <NavLink
                to={`/categories/${category.id}`}
                className={clsx('list-group-item', {active: category.id === categoryId})}
                key={index}
            >
                {category.name}
            </NavLink>
        )
    }

    return (
        <div className='well'>
            <h4>Brand</h4>
            <div className='list-group'>
                <NavLink
                    to={`/`}
                    className={clsx('list-group-item', {active: categoryId === undefined})}
                >
                    All
                </NavLink>
                {categories.map((category, index) => renderCategory(category, index))}
            </div>
        </div>
    )
}

export default Categories
