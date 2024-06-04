import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import _ from 'lodash'

import { fetchPhoneById } from "../../reducers/phones/thunk";
import { getSelectedPhone } from "../../reducers/phones/selectors";
import { Col, Row, Stack } from "react-bootstrap";
import BasketCart from "../basketCart/basket";
import { addPhoneToBasket } from "../../reducers/basketCart/thunk";

const Phone = () => {
    const dispatch = useDispatch();

    const phone = useSelector(getSelectedPhone)

    const renderFields = () => {

        return Object.entries(_.omit(phone, ['id', 'categoryId', 'name', 'price', 'image', 'description'])).map(([key, value]) => (
            <Col key={key} direction="horizontal">
                <Stack direction="horizontal">
                    <div className="ab-details-title">
                        {key}
                    </div>
                    <div className="ab-details-info">
                        {value}
                    </div>
                </Stack>
            </Col>
        ))
    }

    const renderContent = () => {

        return (
            <div className="thumbnail-me-2">
                <Row>
                    <Col md={6}>
                        <img 
                            className="img-thumbnail"
                            src={phone.image}
                            alt={phone.name}
                        />
                    </Col>
                    <Col md={6}>
                        {renderFields()}
                    </Col>
                    <div className="caption-full" padding>
                        <h4 className="pull-right">${phone.price}</h4>
                        <h4>{phone.name}</h4>
                        <p>{phone.description}</p>
                    </div>
                </Row>
            </div>
        )
    }

    const renderSidebar = () => {
        
        return (
            <div>
                <p className="lead">Quick Shop</p>
                <BasketCart/>
                <div className="form-group">
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                </div>
                <Stack direction="vertical">
                    <Link to='/' className='btn btn-info btn-block m-1'>Back to Store</Link>
                    <button 
                        type="button"
                        className="btn btn-success btn-block m-1"
                        onClick={() => dispatch(addPhoneToBasket(phone.id))}
                    >
                        Add to cart
                    </button>
                </Stack>
            </div>
        )
    }

    const { id: selectedPhoneId } = useParams()

    useEffect(() => {
        dispatch(fetchPhoneById(selectedPhoneId)); //== componentdid mount
        // return () => { //== componentdidunmount
        //     setTimeout()
        // }
    }, [])

    return (
        <div className="view-container">
            <div className="container">
                <Row>
                    <Col md={9}>
                        {phone && renderContent()}
                    </Col>
                    <Col md={3}>
                        {phone && renderSidebar()}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Phone