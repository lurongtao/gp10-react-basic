import React from 'react'

import { Route } from 'react-router-dom'

function MyLink({ url, children: name }) {
  return (
    <Route children={({ location, history }) => {
      return (
        <li onClick={
          () => {
            history.push(url)
          }
        }>
          {location.pathname === url ? '>' : ''} {name}
        </li>
      )
    }}></Route>
  )
}

export default MyLink