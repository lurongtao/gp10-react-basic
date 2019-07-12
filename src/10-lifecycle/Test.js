import React, { Component } from 'react'

import Ad from './Ad'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello'
    }
    this.msg = '千锋好程序员'
  }

  static abc = 'aaa'

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <>
        <Ad title={this.state.msg}></Ad>
        <div>
          <button onClick={this.handleClick.bind(this)}>click</button>
        </div>
      </>
    )
  }

  handleClick() {
    this.setState({
      msg: 'world'
    })
  }
}

export default Container