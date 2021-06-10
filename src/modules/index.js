import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  counter,
  router: connectRouter(history)
})

export default createRootReducer