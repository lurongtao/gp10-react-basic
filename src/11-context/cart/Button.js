import React from 'react'
import { CounterConsumer } from './Provider'

let Button = (props) => {
  return (
    <CounterConsumer>
      {
        function({ incrementCount, decrementCount }) {
          let text = props.type === 'increment' ? '+' : '-'
          let event = props.type === 'increment' ? incrementCount : decrementCount
          return (
            <button onClick={event}>{text}</button>
          )
        }
      }
    </CounterConsumer>
  )
}

export default Button