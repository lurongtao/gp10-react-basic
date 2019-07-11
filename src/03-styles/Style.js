import React, { Component } from 'react'

import './style.css'
import css from './css'

class Style extends Component {
  render() {
    return (
      <>
        <div style={css.title}>
          hello
        </div>
        <div className="title">
          world
        </div>
      </>
    )
  }
}

export default Style