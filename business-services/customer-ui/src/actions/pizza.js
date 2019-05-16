import * as types from '../constants/ActionTypes'
import { handleErrors, resolveErrorAction } from './errors'

const getPizzasAction = pizzas => ({
  type: types.GET_PIZZAS,
  pizzas
})

const getPizzas = () => dispatch => {
  fetch("http://localhost:8080/pizza-registry/pizzas")
    .then(response => handleErrors(response))
    .then(response => response.json())
    .then(pizzas => dispatch(getPizzasAction(pizzas)))
    .catch(error => dispatch(resolveErrorAction(error)));
}

export default getPizzas
