import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import AAA from './AAA'

class Cookbooks extends Component {
  render() {
    let { history, location, match } = this.props
    // console.log(this.props)
    return (
      <div>
        <span>cookbooks</span>
        <button onClick={this.handleClick.bind(this)}>click</button>
        <Route path={`${match.url}aaa`} component={AAA}></Route>
      </div>
    )
  }

  handleClick() {
    this.props.history.push('/mylink', {name: 'zhaoqian'})
  }
}

export default Cookbooks