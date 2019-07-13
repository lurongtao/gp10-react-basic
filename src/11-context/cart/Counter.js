import React from 'react'

import {
  CounterConsumer
} from './Provider'

let Counter = (props) => {
  return (
    <CounterConsumer>
      {
        function({count}) {
          return count
        }
      }
    </CounterConsumer>
  )
}

export default Counter