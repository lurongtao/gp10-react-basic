import React, { Fragment } from 'react'

// 函数式组件
// 无状态组件
function Func(props) {
  return (
    <Fragment>
      <div>this is functional component</div>
      <div>{ props.title }</div>
    </Fragment>
  )
}

export default Func