import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../reducers/basketCart/selectors';
import { removePhoneFromBasket, basketCheckout, cleanBasket } from '../../reducers/basketCart/thunk';

const Basket = () => {

    const dispatch = useDispatch();

    const phones = useSelector(getBasketPhonesWithCount);
    const totalPrice = useSelector(getTotalBasketPrice);

    const isBasketEmpty = (phones.length === 0)

    const renderContent = () => {
        return (
            <div>
                {isBasketEmpty ? <div>Your shopping cart is empty</div> : (
                    <>
                        <Container className='basket-container'>
                            {phones.map((phone, index) => (
                                <Row 
                                    key={index}
                                    className='item-checkout'
                                >
                                    <Col>
                                        <img
                                            className='img-thumbnail'
                                            src={phone.image}
                                            alt={phone.name}
                                        />
                                    </Col>
                                    <Col className='col-container'>{phone.name}</Col>
                                    <Col className='col-container'>{phone.price}</Col>
                                    <Col className='col-container'>{phone.count}</Col>
                                    <Col className='col-container'>
                                        <span 
                                        className='delete-cart'
                                        onClick={() => dispatch(removePhoneFromBasket(phone.id))}
                                        ></span>
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                        <Row>
                            <div className='pull-right total-user-checkout'>
                                <b>total: </b>
                                ${totalPrice}
                            </div>
                        </Row>
                    </>
                )}
            </div>
        )
    }

    const renderSidebar = () => {
        return (
            <div>
                <Link
                    to='/'
                    className='btn btn-info'
                >
                    <span className='glyphicon glyphicon-info-sign'></span>
                    <span>Continue shopping!</span>
                </Link>
                {!isBasketEmpty && 
                    <div>
                        <button
                            onClick={() => dispatch(cleanBasket())}
                            className='btn btn-danger'
                        >
                            <span className='glyphicon glyphicon-trash'></span>
                            Clean Cart
                        </button>
                        <button
                            className='btn btn-success'
                            onClick={() => dispatch(basketCheckout(phones))}
                        >
                            <span className='glyphicon glyphicon-envelope'></span>
                            Checkout
                        </button>
                    </div>
                }
            </div>
        )
    }

    return ( 
        <div className='view-container'>
            <div className='container'>
                <Row>
                    <Col md={9}>
                        {renderContent()}
                    </Col>
                    <Col md={3} className='btn-user-chekout'>
                        {renderSidebar()}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Basket