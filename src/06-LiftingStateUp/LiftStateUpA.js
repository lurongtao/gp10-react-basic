import React, { Component } from 'react'

class LiftSateUpA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'hello'
    }
  }

  render() {
    let { onMessage } = this.props
    return (
      <button onClick={e => onMessage(this.state.message)}>send</button>
    )
  }
    
  // handleClick() {
  //   let { onMessage } = this.props
  //   onMessage(this.state.message)
  // }
}

export default LiftSateUpA