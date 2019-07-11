import React, { Component } from 'react'

class JSX extends Component {

 render() {
    const h = React.createElement
    return (
    <div class='app' id='appRoot'>
      <h1 class='title'>欢迎进入React的世界</h1>
      <p>
        React.js 是一个帮助你构建页面 UI 的库
      </p>
    </div>
   )
 }
}

export default JSX