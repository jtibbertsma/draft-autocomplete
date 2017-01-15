import { createStore, combineReducers, applyMiddleware } from 'redux'

import draft from '../reducers/draft'
import logger from '../middleware/logger'

const reducer = combineReducers({
  draft
})

const enhancer = () => {
  if (process.env.NODE_ENV === 'production') {
    return undefined
  } else {
    return applyMiddleware(logger)
  }
}

export default function applicationStore() {
  return createStore(reducer, {}, enhancer())
}
