import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['🍎', '🍌'],
      value: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.value],
      value: ''
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map(value => {
              return <li>{value}</li>
            })
          }
        </ul>
        <div>
          
        </div>
        <div>
          <input type="text" 
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}>add</button>
        </div>
      </div>
    )
  }
}

export default App