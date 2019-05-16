import React from 'react'
import { connect } from 'react-redux'
import PizzaLoader from '../components/PizzaLoader'

const PizzaLoaderContainer = ({isLoaded}) => (
    <PizzaLoader isLoaded={isLoaded}/>
)

const mapStateToProps = state => ({
  isLoaded: state.pizza.isLoaded
})

export default connect(mapStateToProps)(PizzaLoaderContainer)
