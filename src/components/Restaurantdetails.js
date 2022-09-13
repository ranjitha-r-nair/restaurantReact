import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row, Image, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useSelector } from 'react-redux'



function Restaurantdetails() {

    const [restaurantdetails, setRestaurantdetails] = useState([])
    const { id } = useParams()
    const restaurantReducerdetails = useSelector(state => state.restaurantReducer)
    const { restaurant } = restaurantReducerdetails

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('/restaurants.json')
    //             .then((res) => res.json())
    //             .then((data) => setRestaurantdetails(data.restaurants))
    //     }
    //     fetchData();
    // }, [])
    const restaurantData = restaurant.find(item => item.id == id)
    console.log(restaurantData);
    console.log("data is", id);//paramsle id

    return (
        <div>


            <Link className="b1 btn btn-outline-dark rounded btn-sm my-2" to='/'>Back</Link>
            {restaurantData ? (
                <Row className='my-3 '>
                    <Col md={3}>
                        <Image src={restaurantData.photograph} alt={restaurantData.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h2>{restaurantData.name}</h2>
                            <p>{restaurantData.neighborhood}</p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <p>Cuisine type:{restaurantData.cuisine_type}</p>
                            <p>Address:{restaurantData.address}</p>
                        </ListGroup.Item>
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h4>Operating hours:</h4>
                            <p>Monday:{restaurantData.operating_hours.Monday}</p>
                            <p>Tuesday:{restaurantData.operating_hours.Tuesday}</p>
                            <p>wednesday:{restaurantData.operating_hours.Wednesday}</p>
                            <p>Thursday:{restaurantData.operating_hours.Thursday}</p>
                            <p>Friday:{restaurantData.operating_hours.Friday}</p>
                            <p>Saturday:{restaurantData.operating_hours.Saturday}</p>
                            <p>Sunday:{restaurantData.operating_hours.Sunday}</p>



                        </ListGroup.Item>
                    </Col>

                    <Row className='my-3 mx-3 p-3 rounded card'>

                        <Rating data={restaurantData.reviews} />

                    </Row>


                </Row>


            ) : 'no data'}

        </div>
    )
}

export default Restaurantdetails