import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './13-Redux/store/'

import { HomeContainer as Home } from './13-Redux/home/'
import { SearchContainer as Search } from './13-Redux/search/'

ReactDOM.render(
  <Provider store={store}>
    <Home></Home>
    <Search></Search>
  </Provider>,
  document.querySelector('#root')
)