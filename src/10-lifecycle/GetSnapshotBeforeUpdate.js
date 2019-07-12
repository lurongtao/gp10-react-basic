import React, { Component } from 'react'

class GetSnapshotBeforeUpdate extends Component {
  constructor(props) {
    super(props)
    this.snapshot = React.createRef()
  }
  render() {
    return (
      <div ref={this.snapshot} style={{width: '100px', height: '100px', background: 'red'}}>
        snapshot
      </div>
    )
  }

  getSnapshotBeforeUpdate() {
    console.log(this.snapshot)
    return this.snapshot.current.offsetHeight
  }

  componentDidUpdate(prevProps, PrevState, snapshot) {
    console.log(snapshot)
    this.snapshot.current.style.height = '200px'
  }
}

export default GetSnapshotBeforeUpdate