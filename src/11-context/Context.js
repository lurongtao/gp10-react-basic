import React, { Component } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

import NameContext from './name-context'

class Context extends Component {
  render() {
    let { Provider } = NameContext
    return (
      <Provider value={'name-zhaoqian'}>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    )
  }
}

export default Context