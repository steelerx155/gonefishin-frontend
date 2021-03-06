import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import destinationsReducer from './reducers/destinations'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    dest: destinations
  })
  


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store 