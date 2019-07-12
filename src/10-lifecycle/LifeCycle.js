import React, { Component } from 'react'

// import Child from './Child'
// import GetDerivedStateFromProps from './GetDerivedStateFromProps'
// import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate'
import Test from './Test'

class Container extends Component {
  constructor() {
    super()
    // console.log('constructor')
    this.state = {
      title: 'hi'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    // console.log('componentWillMount')
  }

  render() {
    // console.log('render')
    return (
      <>
        {/* <GetDerivedStateFromProps title={this.state.title}></GetDerivedStateFromProps>
        <div><button onClick={this.handleClick}>click</button></div>

        <GetSnapshotBeforeUpdate title={this.state.title}></GetSnapshotBeforeUpdate> */}
        <Test></Test>
      </>
    )
  }

  componentDidMount() {
    // console.log('componentDidMount')
  }

  handleClick() {
    this.setState({
      title: 'hello'
    })
  }
}

export default Container