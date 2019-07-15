import React from 'react'

const SearchUI = (props) => {
  return (
    <div onClick={() => props.changeHomeTitle('home search')}>search</div>
  )
}

export default SearchUI