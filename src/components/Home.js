import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Restaurantcard from './Restaurantcard'
import { listRestaurants } from '../Actions/restaurantActions'
function Home() {


    const [filter, setFilter] = useState("")//veroru statelek pokan
    const dispatch = useDispatch()  //dispatchne const dispatchlek assign cheythu


    const restaurantReducerhome = useSelector(state => state.restaurantReducer)  //store l key vach athilula state ulla data pull cheythedukan useselector use akune
    const { restaurant } = restaurantReducerhome//restaurant le data mathram filter cheyth edukan
    //restaurant restaurantreducer.js le reducer accept cheyuna empty state 
    //useSelector oru state kondu tharanm
    useEffect(() => {
        dispatch(listRestaurants())//  actionle listrestaurant paranja function dispatch cheyum

    }, [])




    // const [hotels, setHotels] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('/restaurants.json')
    //             .then((res) => res.json())
    //             .then((data) => setHotels(data.restaurants))
    //     }
    //     fetchData();
    // }, [])
    // console.log("data is", restaurant);

    return (
        <Row>
            <input
                value={filter}
                placeholder='search a place here'
                type='text'
                onChange={event => setFilter(event.target.value)}
            />


            {restaurant ? (

                restaurant.filter(item => {
                    if (filter == "") {
                        return item
                    }
                    else if (item.neighborhood.toLowerCase().includes(filter.toLowerCase())) {
                        return item
                    }
                })
                    .map(item => (

                        <Col>
                            <Restaurantcard item={item} />
                        </Col>

                    ))
            ) : 'no data'
            }
        </Row>

    )
}

export default Home