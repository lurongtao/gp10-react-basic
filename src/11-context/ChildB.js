import React, { Component } from 'react'

import ChildBA from './ChildBA'

import ExployeeContext from './employee-context'

class ChildB extends Component {
  render() {
    let { Provider } = ExployeeContext
    return (
      <Provider value={'exp-huanhuan'}>
        <ChildBA></ChildBA>
      </Provider>
    )
  }
}

export default ChildB