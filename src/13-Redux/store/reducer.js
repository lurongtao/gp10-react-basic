import { combineReducers } from 'redux'

import { reducer as home } from '../home/'
import { reducer as search } from '../search/'

export default combineReducers({
  home,
  search
})