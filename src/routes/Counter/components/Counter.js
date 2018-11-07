import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    doubleAsync: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {
      counter,
      increment,
      doubleAsync
    } = this.props

    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Counter: {counter}</h2>
        <button className='btn btn-primary' onClick={increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-secondary' onClick={doubleAsync}>
          Double (Async)
        </button>
      </div>
    )
  }
}

export default Counter
