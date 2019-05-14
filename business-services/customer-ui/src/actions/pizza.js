import * as types from '../constants/ActionTypes'

const getPizzasAction = pizzas => ({
  type: types.GET_PIZZAS,
  pizzas
})

const getPizzas = () => dispatch => {
  fetch("http://localhost:8080/pizza-registry/pizzas")
    .then(response => response.json())
    .then(pizzas => dispatch(getPizzasAction(pizzas)));
}

export default getPizzas
