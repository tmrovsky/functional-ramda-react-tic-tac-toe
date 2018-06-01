import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from 'components/App/App'
import 'assets/scss/index.scss'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
