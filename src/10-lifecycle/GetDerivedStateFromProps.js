import React, { Component } from 'react'

class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'props',
      abc: 'state'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state)

    return {
      title: props.title,
      abc: state.abc
    }
  }

  render() {
    return (
      <>
        <div>{this.state.abc} <button onClick={() => this.setState({abc: 'aaa'})}>childclick</button></div>
      </>
    )
  }
}

export default GetDerivedStateFromProps