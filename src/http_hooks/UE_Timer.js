
import React, { useEffect, useState } from 'react'

function UE_Timer() {
    const [count ,setCount] = useState(0)
const tick = () =>{
    console.log("insdie tick");
    // setCount(prevstate => prevstate+1) //for using prevstate there is no need to mention count in dependency array
    setCount(count+1) //when prevstate is not used..then count is needs to be mentioned in dependency array then only it keep track of count varible status
}
    useEffect(()=>{
        console.log("inside useEffect");
        const interval=setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count]) 
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default UE_Timer
