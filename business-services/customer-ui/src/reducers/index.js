import { combineReducers } from 'redux'
import ids from './pizza'

const rootReducer = combineReducers({
    pizzas: ids
})

export default rootReducer
