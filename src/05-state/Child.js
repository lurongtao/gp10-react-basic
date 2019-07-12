import React, { Component } from 'react'

class Child extends Component {
  // 只要父组件render 被调用，子组件render 也会被调用，不管父组件的状态更不更新
  render() {
    console.log('child render')
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default Child