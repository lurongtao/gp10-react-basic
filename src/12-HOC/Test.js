import React, { Component } from 'react'

import Hoc from './HighOrderComponents'

class Test extends Component {
  render() {
    return (
      <div>test</div>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }
}

export default Hoc(Test, {
  name: 'zhaoqian',
  age: 18
})

// export default Test