import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class AAA extends Component {
  render() {
    console.log(this.props)
    return (
      <div>aaa</div>
    )
  }
}

export default withRouter(AAA)