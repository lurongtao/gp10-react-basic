import React from 'react'
import ReactDOM from 'react-dom'

import LifeCycle from './10-lifecycle/LifeCycle'

// function Message() {
//   this.name = 'zhaoqian'
// }

// const message = new Message()

ReactDOM.render(
  <LifeCycle>
    <div>item</div>
  </LifeCycle>,
  document.querySelector('#root')
)