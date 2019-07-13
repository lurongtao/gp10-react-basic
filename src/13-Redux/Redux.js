import React, { Component } from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(() => {
        setTimeout(() => {
          dispatch({
            type: 'increment',
            payload: 2
          })
        }, 2000)
      })
    },
    decrement() {
      dispatch({
        type: 'decrement',
        payload: 2
      })
    }
  }
}

export class Redux extends Component {
  render() {
    let { increment, decrement, count } = this.props
    return (
      <div>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)
