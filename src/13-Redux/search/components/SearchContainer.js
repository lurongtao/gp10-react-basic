import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchUI from './SearchUI'

import { change } from '../../home/action-creator'

const mapDispatch = (dispatch) => ({
  changeHomeTitle(title) {
    dispatch(change(title))
  }
})

class SearchContainer extends Component {
  render() {
    return (
      <SearchUI { ...this.props }></SearchUI>
    )
  }
}

export default connect(null, mapDispatch)(SearchContainer)