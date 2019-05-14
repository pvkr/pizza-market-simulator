import React from 'react'
import PropTypes from 'prop-types'

const Pizza = ({pizza}) => (
  <div>
    <img source={pizza.image} alt="Pizza"/>
    <div>{pizza.name}</div>
    <div>{pizza.description}</div>
    <div>{pizza.price}</div>
    <hr/>
  </div>
)

Pizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
}

export default Pizza
