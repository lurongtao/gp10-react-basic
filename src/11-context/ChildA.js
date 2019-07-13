import React, { Component } from 'react'

import ChildAB from './ChildAB'

// import NameContext from './name-context'

import ExployeeContext from './employee-context'

class ChildA extends Component {
  static contextType = ExployeeContext

  render() {
    return (
      <>
        <ChildAB></ChildAB>
      </>
    )
  }
}

export default ChildA