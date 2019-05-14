import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/App';
import rootReducer from './reducers'
import initialLoad from './actions'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import './index.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

store.dispatch(initialLoad())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
