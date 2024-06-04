import React from 'react'
import { Link } from 'react-router-dom'
import { getTotalBasketCount, getTotalBasketPrice } from '../../reducers/basketCart/selectors'
import { useDispatch, useSelector } from 'react-redux'

const BasketCart = () => {

    const dispatch = useDispatch();

    const totalBasketCount = useSelector(getTotalBasketCount);
    const totalPrice = useSelector(getTotalBasketPrice);

    return (
        <div className='cart'>
            <div className='dropdown'>
                <Link
                    to='/basket'
                    id='dlabel'
                    className='btn btn-inverse btn-block btn-lg'
                >
                    <i className='fa fa-fa-shopping-cart'></i>
                    <span>{totalBasketCount} item(s) - ${totalPrice}</span>
                </Link>
            </div>
        </div>
    )
}

export default BasketCart