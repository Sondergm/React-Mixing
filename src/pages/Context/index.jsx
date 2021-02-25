import React, { Component } from "react";

const MyContext = React.createContext();

export default class Context extends Component {
  render() {
    return <GrandfatherComponent />;
  }
}

class GrandfatherComponent extends Component {
  state = { msg: "1+1=2" };
  render() {
    return (
      <MyContext.Provider value={{ msg: this.state.msg }}>
        <h2>祖父组件</h2>
        <p>我传递出的消息是：{this.state.msg}</p>
        <FatherComponent />
      </MyContext.Provider>
    );
  }
}

class FatherComponent extends Component {
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <p>我不接收消息</p>
        <GrandsonAComponent />
        <GrandsonBComponent />
      </div>
    );
  }
}

class GrandsonAComponent extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <h2>我是孙子组件A</h2>
        <p>我接收到的消息是：{this.context.msg}</p>
      </div>
    );
  }
}

function GrandsonBComponent() {
  return (
    <div>
      <h2>我是孙子组件B</h2>
      <p>
        我接收到的消息是：
        <MyContext.Consumer>{(value) => value.msg}</MyContext.Consumer>
      </p>
    </div>
  );
}
