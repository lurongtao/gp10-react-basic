import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeUI from './HomeUI'

import { change } from '../action-creator'

const mapStates = (state) => {
  return {
    title: state.home.title
  }
}

const mapDispatch = (dispatch) => ({
  change(title) {
    dispatch(change(title))
  }
})

class HomeContainer extends Component {
  render() {
    return (
      <HomeUI { ...this.props }></HomeUI>
    )
  }

  componentDidMount() {
    this.props.change('home header')
  }
}

export default connect(mapStates, mapDispatch)(HomeContainer)