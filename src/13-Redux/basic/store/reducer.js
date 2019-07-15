import { INCREMENT, DECREMENT, LOADDATA } from '../action-types'

const defaultState = {
  count: 0
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA: 
      return { count: action.payload }
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default: 
      return state
  }
}