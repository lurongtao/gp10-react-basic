import React, { Fragment } from 'react'
import createReactClass from 'create-react-class'

import ClassComponent from './ClassComponent'
import Func from './Func'

export default createReactClass({
  render () {
    return (
      <Fragment>
        <ClassComponent></ClassComponent>
        <Func></Func>
        <div>title</div>
      </Fragment>
  	)
  }
})