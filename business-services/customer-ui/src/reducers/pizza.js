import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const isLoaded = (state = false, action) => {
  if (action.type === types.GET_PIZZAS)
    return true;
  return state;
}

const pizzaMap = (state = {}, action) => {
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

export default combineReducers({
    isLoaded,
    map: pizzaMap
})
