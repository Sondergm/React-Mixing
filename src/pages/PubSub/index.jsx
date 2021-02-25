import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { Button } from 'antd'

export default class PubSubPage extends Component {
  render() {
    return (
      <div>
        <h1>PubSub</h1>
        <PubPage/>
        <SubPage/>
      </div>
    )
  }
}

class PubPage extends Component {
  
  publish = () => {
    PubSub.publish('PubSubTest', {
      error: '标准错误'
    })
  }

  render() {
    return <div>
      <h2>PubPage</h2>
      点击发布消息 - <Button onClick={this.publish}>Publish</Button>
    </div>
  }
}

class SubPage extends Component {

  state = {
    msg: '',
    data: {
      error: ''
    }
  }

  componentDidMount() {
    PubSub.subscribe('PubSubTest', (msg, data) => {
      this.setState({ msg, data })
    })
  }
  render() {
    const { msg, data } = this.state
    return (
      <div>
        <h2>SubPage</h2>
        <h3>消息来自：{msg}</h3>
        <h3>错误为：{data.error}</h3>
      </div>
    )
  }
}