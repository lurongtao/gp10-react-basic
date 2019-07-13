import React, { Component } from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export class Redux extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleIncClick}>+</button>
        {this.props.count}
        <button onClick={this.handleDecClick}>-</button>
      </div>
    )
  }

  // handleIncClick() {
  //   store.dispatch({
  //     type: 'increment'
  //   })
  // }

  // handleDecClick() {
  //   store.dispatch({
  //     type: 'decrement'
  //   })
  // }
}

export default connect(mapStateToProps)(Redux)
