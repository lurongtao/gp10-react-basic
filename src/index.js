import React from 'react'
import ReactDOM from 'react-dom'

import Props from './04-props/Props'

import YourComponent from './04-props/YourComponent'

// function Message() {
//   this.name = 'zhaoqian'
// }

// const message = new Message()

ReactDOM.render(
  <Props title={<YourComponent />}>
    <div>item</div>
  </Props>,
  document.querySelector('#root')
)