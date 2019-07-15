import { connect } from 'react-redux'

import ReduxContainer from './ReduxContainer'

import { increment, decrement, loadData } from './ActionCreator'

export default connect(
  state => ({
    count: state.count,
  }),
  dispatch => ({
    increment() {
      dispatch(increment())
    },
    decrement() {
      dispatch(decrement())
    },
    loadData() {
      dispatch(loadData())
    }
  })
)(ReduxContainer)