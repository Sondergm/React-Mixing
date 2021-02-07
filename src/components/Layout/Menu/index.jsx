import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const { Item } = Menu
const menuItems = [
  {
    id: 'pubsub',
    name: 'PubSub',
  },
  {
    id: 'lazyload',
    name: 'LazyLoad',
  },
  {
    id: 'state',
    name: 'State',
  },
  {
    id: 'redux',
    name: 'Redux',
  },
  {
    id: 'hooks',
    name: 'Hooks',
  },
]

class Navigator extends React.Component{

  state = {
    current: 'pubsub'
  }

  handleClick = e => {
    this.setState(
      { current: e.key },
      function switchRoute() {
        this.props.history.push(`/${this.state.current}`)
      }
    )
  }

  render() {
    return (
      <div>
        <Menu 
          mode="horizontal" 
          selectedKeys={[this.state.current]} 
          defaultSelectedKeys={['pubsub']}
          onClick={this.handleClick} 
        >
          {
            menuItems.map(item => {
              return <Item key={item.id} >{item.name}</Item>
            })
          }
        </Menu>
      </div>
    )
  }
}

export default withRouter(Navigator)