import React, { Component, createContext } from 'react'

let {
  Provider,
  Consumer: CounterConsumer
} = createContext()

class CounterProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  decrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    return (
      <Provider value={{
        count: this.state.count,
        incrementCount: this.incrementCount.bind(this),
        decrementCount: this.decrementCount.bind(this)
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CounterProvider,
  CounterConsumer
}
