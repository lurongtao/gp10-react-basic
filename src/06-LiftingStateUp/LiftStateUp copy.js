import React, { Component } from 'react'

import LiftSateUpA from './LiftStateUpA'
import LiftSateUpB from './LiftStateUpB'

class LiftSateUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'oops'
    }
  }
  render() {
    return (
      <>
        <LiftSateUpA onMessage={this.handleMessage.bind(this)}></LiftSateUpA>
        <LiftSateUpB title={this.state.title}></LiftSateUpB>
      </>
    )
  }

  handleMessage(msg, e) {
    this.setState({
      title: msg
    })
  }
}

export default LiftSateUp