const { createStore } = require('redux')

const defaultState = {
  count: 0
}

const reducer = function(state=defaultState, action) {
  switch(action.type) {
    case 'increment': 
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'increment'
})