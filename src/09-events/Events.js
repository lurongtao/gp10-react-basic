import React, { Component } from 'react'

class Events extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e, 3, 2)}>click</button>
      </div>
    )
  }

  handleClick(e, num, num2) {
    console.log(e, num, num2)
  }
}

export default Events