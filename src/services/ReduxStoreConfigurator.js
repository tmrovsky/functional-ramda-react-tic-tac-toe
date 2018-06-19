import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from 'ducks'

class ReduxStoreConfigurator {
  middlewares = [createLogger()] // eslint-disable-line

  configureStore (initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(...this.middlewares)
    )
  }
}

export default new ReduxStoreConfigurator()
