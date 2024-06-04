import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { Col, Row, Button } from "react-bootstrap";

import { fetchPhones, loadMorePhones } from "../../reducers/phones/thunk";
import { getPhones, getSearch } from "../../reducers/phones/selectors";
import { addPhoneToBasket } from "../../reducers/basketCart/thunk";
import { fetchCategories } from "../../reducers/categories/thunk";
import Layout from "../layout";

const Phones = () => {
    const dispatch = useDispatch();

    const { id: categoryId } = useParams();

    const phones = useSelector((state) => getPhones(state, categoryId))
    const search = useSelector(getSearch)

    useEffect(() => {
        dispatch(fetchPhones());
        dispatch(fetchCategories());
    }, [])

    const filteredPhones = search !== "" ? phones.filter((phone) => {
        return phone.name?.toLowerCase().includes(search?.toLowerCase())
    }) : phones;

    const renderPhone = (phone, index) => {
        const shortDescription = `${phone.description.slice(0, 60)}...`
        const id = phone.id
        return (
            <Col sm={4} lg={4} md={4} className="book-list" key={index}>
                <div className="thumbnail">
                    <img 
                        className="img-thumbnail"
                        src={phone.image}
                        alt={phone.name}
                    />
                    <div className="caption">
                        <h4 className="pull-right">${phone.price}</h4>
                        <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <p className="itemButton">
                            <Button 
                                variant="primary"
                                onClick={() => dispatch(addPhoneToBasket(id))}
                                >
                                Buy now!
                            </Button>
                            <Link to={`/phones/${phone.id}`}>
                                <Button variant="outline-dark">
                                    More info
                                </Button>
                            </Link>
                        </p>
                    </div>
                </div>
            </Col>
        )
    }

    return (
        <Layout>
            <Row className="books">
                {filteredPhones.map((phone, index) => renderPhone(phone, index))}
            </Row>
            <Row>
                <Col md={12}>
                    <Button 
                        onClick={() => dispatch(loadMorePhones())}
                        className="pull-right"
                        variant="primary"
                    >
                        Load More
                    </Button>
                </Col>
            </Row>
        </Layout>
    )
}

// class Phones extends Component { //БЫЛО
//     componentDidMount() {
//         this.props.fetchPhones()
//     }
//     render () {
//         return (
//             <div>Phones</div>
//         )
//     }
// }

// const mapDispatchToProps = {
//     fetchPhones
// }

export default Phones
