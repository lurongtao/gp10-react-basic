import React, { Component } from 'react'

class Controlled extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   value: 'hello'
    // }

    this.input = React.createRef()
  }

  render() {
    return (
      <>
        <div>
          <input ref={this.input} type="text"/>
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}>click</button>
        </div>
      </>
    )
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    console.log(this.input.current.value)
  }
}

export default Controlled