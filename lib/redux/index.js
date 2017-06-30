import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { questionsReducer } from '../modules'

const rootReducer = combineReducers({
  questions: questionsReducer
})
const middlewares = [thunk]
let enhancers

if (process.env.NODE_ENV !== 'production') {
  enhancers = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  enhancers = compose(applyMiddleware(...middlewares))
}

const store = createStore(rootReducer, undefined, enhancers)

export { store }
