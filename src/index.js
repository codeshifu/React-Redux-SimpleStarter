import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

// let's get cracking

render(<App />, document.getElementById('root'))
registerServiceWorker()
