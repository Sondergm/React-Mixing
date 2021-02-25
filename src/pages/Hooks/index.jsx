import React, { useState, useEffect, useRef } from 'react'

export default function Hooks(props){

  const [name, setName] = useState('小明');
  const refNode = useRef(null);
  function changeName() {
    console.log(refNode);
    setName(preName => {
      return `用 小强 替换了 ${preName}`
    })
  }
  useEffect(()=>{
    console.log('hhhh');  // 相当于 componentDidMount + componentDidUpdate
    return () => {
      console.log('aaaaaaa');  // 相当于 componentWillUnmount
    }
  }, [name]) // 此处为[]时，此函数只会在页面第一次render时调用，相当于componentDidMount
  return (
    <div>
      <h2>Hooks</h2>
      <h3>名字：{name}</h3>
      <div>
        <button onClick={changeName}>改名</button>
      </div>
      <h5 ref={refNode} >ref标签</h5>
    </div>
  )
}
