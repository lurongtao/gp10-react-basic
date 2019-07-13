import React, { Component } from 'react'

import Counter from './Counter'
import Button from './Button'

import {
  CounterProvider
} from './Provider'

class Cart extends Component {
  render() {
    return (
      <CounterProvider>
        <Button type="decrement"></Button>
        {' '}
        <Counter></Counter>
        {' '}
        <Button type="increment"></Button>
      </CounterProvider>
    )
  }
}

export default Cart