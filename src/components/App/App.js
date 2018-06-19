import React from 'react'
import { Provider } from 'react-redux'
import GameBoardConnector from 'connectors/GameBoardConnector'
import storeConfigurator from 'services/ReduxStoreConfigurator'

const store = storeConfigurator.configureStore()

const App = () => (
  <Provider store={store}>
    <div className='tic-tac-toe-app'>
      <GameBoardConnector />
    </div>
  </Provider>

)

export default App
