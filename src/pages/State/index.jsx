import React, { Component } from 'react'

export default class State extends Component {

  state = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  }

  increment = () => {
    const { ...nums } = this.state
    this.setState(
      (state, props) => ({ one: nums.one + 1 }),
      () => { console.log(this.state); }
    )
    // this.setState(
    //   { one: nums.one + 1 },
    //   () => {
    //     setTimeout(()=>{
    //       this.setState(
    //         { one: nums.one + 1 },
    //         () => {
    //           setTimeout(()=>{
    //             this.setState(
    //               { two: nums.two + 1 },
    //               () => {
    //                 setTimeout(() => {
    //                   this.setState(
    //                     { three: nums.three + 1 },
    //                     () => {
    //                       setTimeout(() => {
    //                         this.setState(
    //                           { four: nums.four + 1 },
    //                           () => {
    //                             setTimeout(() => {
    //                               this.setState(
    //                                 { five: nums.five + 1 },
    //                                 () => {
    //                                   console.log("加法完成！");
    //                                 }
    //                               )
    //                             }, 1000);
    //                           }
    //                         )
    //                       }, 1000);
    //                     }
    //                   )
    //                 }, 1000);
    //               }
    //             )
    //           },1000)
    //         }
    //       )
    //     },1000)
    //   }
    // )
  }

  render() {
    return (
      <div>
        <p>{this.state.one}</p>
        <p>{this.state.two}</p>
        <p>{this.state.three}</p>
        <p>{this.state.four}</p>
        <p>{this.state.five}</p>
        <button onClick={this.increment}>每行顺序加1</button>
      </div>
    )
  }
}
