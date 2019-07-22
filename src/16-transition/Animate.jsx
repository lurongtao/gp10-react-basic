import { CSSTransition, TransitionGroup } from 'react-transition-group'

import React, { Component } from 'react'

import './ani.css'
import './animate.css'

const styles = {
  width: '100px',
  height: '100px',
  background: 'red',
  color: 'yellow'
}

class Animate extends Component {
  state = {
    isShow: true,
    list: ['aaa', 'bbb', 'ccc']
  }

  render() {
    return (
      <>
        <TransitionGroup>
          {
            this.state.list.map((value, index) => {
              return (
                <CSSTransition
                  timeout={2000}
                  classNames={{
                    enter: 'animated',
                    enterActive: 'fadeInLeft',
                    exit: 'animated',
                    exitActive: 'fadeOutLeft'
                  }}
                  key={index+value}
                >
                  <div style={styles}>{value}</div>
                </CSSTransition>
              )
            })
              
            }
        </TransitionGroup>
        <div><button onClick={this.handleClick.bind(this)}>add</button></div>
      </>
    )
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isShow: !prevState.isShow,
        list: [...prevState.list, 'ddd']
      }
    })
  }
}

export default Animate