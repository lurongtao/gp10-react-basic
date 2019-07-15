import React from 'react'

export default (props) => {
  return (
    <div>
      <button onClick={props.handleIncrementClick.bind(this)}>+</button>
      {props.count}
      <button onClick={props.handleDecrementClick.bind(this)}>-</button>
    </div>
  )
}