import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Props extends Component {
  static defaultProps = {
    title: 'hello'
  }

  // React 元素
  // React 组件
  static propTypes = {
    title: (props, propName, componentName) => {
      if (props.title.type().props.children !== 'mycomponent') {
        return new Error('组件类型错误')
      }
    }
  }

  render() {
    return (
      <>
        <div>{JSON.stringify(this.props.title)}</div>
        <>{this.props.children}</>
      </>
    )
  }
}

// 静态属性
// Props.defaultProps = {
//   title: 'hello'
// }

export default Props