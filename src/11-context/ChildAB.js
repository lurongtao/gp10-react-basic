import React from 'react'
import NameContext from './name-context'

let { Consumer } = NameContext

function AB(props) {
  return (
    <>
      <div>
        { '-----' }
      </div>
      <div>
        <Consumer>
          {
            value => value
          }
        </Consumer>
      </div>
      <div>
        { '-----' }
      </div>
    </>
  )
}

export default AB