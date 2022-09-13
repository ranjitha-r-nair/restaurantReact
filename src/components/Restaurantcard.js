import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Restaurantcard({item}) { //props n pakarm same name {} koduthu 
  return (
    <Link to={`restaurantdetails/${item.id}`}  style={{textDecoration:'none'}}>
        <Card style={{ width: '18rem'  }} >
    <Card.Img variant="top" src={item.photograph}  className="p-3 di" />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        {item.neighborhood}
      </Card.Text>
    </Card.Body>
    </Card>
    </Link>
    
  )
}

export default Restaurantcard