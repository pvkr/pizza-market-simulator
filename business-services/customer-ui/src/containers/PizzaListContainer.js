import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pizza from '../components/Pizza'

const PizzaListContainer = ({pizzas}) => (
  <div>
    {pizzas.map(pizza =>
        <Pizza key={pizza.id} pizza={pizza} />
    )}
  </div>
)

PizzaListContainer.propTypes = {
  pizzas: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  pizzas: Object.values(state.pizza.map)
})

export default connect(mapStateToProps, {})(PizzaListContainer)
