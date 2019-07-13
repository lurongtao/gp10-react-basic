import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Redux from './13-Redux/Redux'

import store from './13-Redux/store/'

ReactDOM.render(
  <Provider store={store}>
    <Redux></Redux>
  </Provider>,
  document.querySelector('#root')
)