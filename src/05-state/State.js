import React, { Component } from 'react'

import Child from './Child'

class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'hello',
      arr: ['a', 'b'],
      count: 0
    }
  }

  render() {
    console.log('parent render')
    return (
      <>
        <Child title={this.state.title}></Child>
        <div id="info">{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>change</button>
      </>
    )
  }

  handleClick() {
    //1、setState实质上是将传入的第一个参数对象和state对象做merge
    //2、如果依据原有的state更新state, 最好传入一个函数
    //3、如果在DOM渲染完想做点什么事，setState需要传入第二个参数，参数是个回调函数
    // this.state.arr.push('c')
    // this.setState(
    //   (prevState) => {
    //     return {
    //       count: prevState.count + 1
    //     }
    //   },
    //   () => {
    //     let info = document.querySelector('#info').innerHTML
    //     console.log(info)
    //   }
    // )

    this.setState({})
  }
}

export default State