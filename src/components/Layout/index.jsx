import React, { Component } from 'react'
import Navigator from './Menu'
import { Card } from 'antd'
import './index.less'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout" >
        <Card className='navigator-card' >
          <Navigator/>
        </Card>
        <Card className='main-card' >
          {this.props.children}
        </Card>
      </div>
    )
  }
}
