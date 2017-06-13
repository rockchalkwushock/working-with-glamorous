import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { questionsReducer } from '../modules'

const rootReducer = combineReducers({
  form: formReducer,
  questions: questionsReducer
})
const middlewares = [thunk]
let enhancers

if (process.env.NODE_ENV !== 'production') {
  enhancers = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  enhancers = compose(applyMiddleware(...middlewares))
}

const store = createStore(rootReducer, {}, enhancers)

export { store }
