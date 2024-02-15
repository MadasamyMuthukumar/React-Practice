import React from 'react'
import useCounter from '../hooks/useCounter'

function Counter1() {
    const [count ,Increment,Decrement,reset] = useCounter(0,10)
  return (
    <div>
        <div>Count 1: {count}</div>
      <button onClick={Increment}>Increment </button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1
