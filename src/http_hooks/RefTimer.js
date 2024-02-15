import React, { useEffect, useRef, useState } from 'react'

function RefTimer() {
    const [timer,setTimer] = useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
      //  const interval=setInterval(()=>{
      //   setTimer(timer+1)
      //  },1000)
      intervalRef.current=setInterval(()=>{
        setTimer(prev=>prev+1)
       },1000)
             {/* WE CAN CLEAR THE INTERVAL WITHIN USEEFFECT(INTERVAL IS LOCALSCOPE) BUT CANT FROM THE EVENTHANDLER. IN THIS CASE USEREF IS COMES INTO PICTUR */}
       return ()=>{                         
        clearInterval(intervalRef.current)
       }
    },[])
  return (
    <div>
      {timer} 

      {/* <button onClick={()=>clearInterval(interval)}> can't Clear Interval</button> */}
      <button onClick={()=>clearInterval(intervalRef.current)}>can Clear Interval</button>
    </div>
  )
}

export default RefTimer
/**
 * use to create generic container that holds mutable values
 * use ref is used to store any mutable values also it persist during the re-renders and not causing any addition re-renders when its value changes
 * it also remember the stored data even after other state variable caused re-render of this component
 */