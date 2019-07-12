import React, { Component } from 'react'
import {unmountComponentAtNode} from 'react-dom'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      msg: 'good'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title + ' world'
    })
  }

  componentDidMount() {
    setTimeout(() => {
      unmountComponentAtNode(document.getElementById('root'))
    }, 5000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    
    console.log(nextProps.title, this.props.title)

    if (nextState.msg === this.state.msg) {
      return false
    }

    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  render() {
    console.log('child render')
    return (
      <>
        <div>{this.state.msg}</div>
        <div>{this.state.title}</div>
      </>
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

export default Child