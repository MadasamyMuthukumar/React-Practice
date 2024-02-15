import React, { useState } from 'react'

function useCounter(initilaState=0,value) {
    const [count,setCount] =useState(initilaState)
    const increment =()=>{
        setCount(prev=>prev+value)
    }
    const Decrement =()=>{
        setCount(prev=>prev-value)
    }
    const reset =()=>{
        setCount(initilaState)
    }
    return [count , increment,Decrement,reset]
  
}

export default useCounter
