const defaultState = {
  title: 'home title'
}

const reducer = (state=defaultState, action) => {
  if(action.type === 'change') {
    return {
      title: action.payload
    }
  }

  return state
}

export default reducer