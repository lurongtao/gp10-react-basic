import React, { Component } from 'react'

// import NameContext from './name-context'

import EmployeeContext from './employee-context'

class ChildBA extends Component {
  static contextType = EmployeeContext
  render() {
    return (
      <>
        <div>{this.context}</div>
        <div>ba</div>
      </>
    )
  }
}

export default ChildBA