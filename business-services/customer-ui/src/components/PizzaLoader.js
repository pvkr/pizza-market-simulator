import React from 'react'
import PropTypes from 'prop-types'
import loader from '../assets/pizzaLoader.gif'
import './PizzaLoader.css'

const PizzaLoader = ({isLoaded}) => (
  <div className="PizzaLoader" style={{display: isLoaded ? 'none' : 'block'}}>
    <div className="title">Loading</div>
    <div style={{backgroundImage: 'url(' + loader + ')'}}></div>
  </div>
)

PizzaLoader.propTypes = {
  isLoaded: PropTypes.bool
}

export default PizzaLoader
