import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'

// let's get cracking
const store = createStore(reducers)
const boot = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(boot, document.getElementById('root'))
