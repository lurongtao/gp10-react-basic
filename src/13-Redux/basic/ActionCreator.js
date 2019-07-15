import { INCREMENT, DECREMENT, LOADDATA } from './action-types'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const loadData = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOADDATA,
        payload: 5
      })
    }, 2000)
  }
}