import React, { Component } from 'react'
import store from './redux/store'

export default class Redux extends Component {
  render() {
    return (
      <div>
        {store.getState()}
      </div>
    )
  }
}
