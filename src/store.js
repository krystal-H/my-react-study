
// compose作用是把一系列的函数，组装成一个新的函数，并且从后到前，后边参数的执行结果作为其前一个的参数

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from 'redux-thunk'
import * as History from 'history'
import createRootReducer from './modules'

export const history = History.createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDEX_DEVTOOLD_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composeEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers
)
