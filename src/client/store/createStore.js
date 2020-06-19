import {
  applyMiddleware,
  compose,
  createStore as createReduxStore
} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from './reducers'
import sagas from './sagas'

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [thunk, sagaMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  const composeEnhancers = compose

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  )
  store.asyncReducers = {}

  // then run the saga
  sagaMiddleware.run(sagas)

  return store
}

export default createStore
