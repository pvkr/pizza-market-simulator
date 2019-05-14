import * as types from '../constants/ActionTypes'

const ids = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PIZZAS:
      return {
        ...state,
        ...toMap(action.pizzas, pizza => pizza.id)
      }
    default:
      return state;
    }
}

function toMap(array, getKeyFunc) {
  return array.reduce((obj, item) => {obj[getKeyFunc(item)] = item; return obj}, {})
}

export default ids
