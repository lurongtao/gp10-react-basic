import React, {Component} from 'react'

function Hoc(TestComponent, props) {
  class NewComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    render() {
      return (
        <>
          <div>{this.state.count}</div>
          <TestComponent { ...props }></TestComponent>
        </>
      )
    }
  }

  return NewComponent
}

export default Hoc