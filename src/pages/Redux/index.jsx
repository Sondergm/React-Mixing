import React, { Component } from 'react'
import store from './redux/store'

export default class Redux extends Component {

  componentDidMount() {
    store.subscribe(() => this.setState({}))
  }

  increment = () => {
    store.dispatch({
      type: 'increment',
      value: 1,
    })
  }

  render() {
    return (
      <div>
        <h2>
          {store.getState()}
        </h2>
        <div>
          <button onClick={this.increment}>加一</button>
        </div>
      </div>
    )
  }
}
