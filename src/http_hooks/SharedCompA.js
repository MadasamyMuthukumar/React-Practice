import React, { useContext } from 'react'
import SharedCompB from './SharedCompB'
import { sharedContext } from '../components/ContextComp'

function SharedCompA() {
    const contextValue=useContext(sharedContext)
  return (
    <div>
     <div>
        COUNT ONE VALUE
         <div> {contextValue.countVal}</div>
            <button onClick={()=>contextValue.countDisp('inc')}>Increment</button>
            <button onClick={()=>contextValue.countDisp('dec')}>Decrement</button>
            <button onClick={()=>contextValue.countDisp('res')}>Reset</button>
        </div>
        <div> 
            COUNT TWO VALUE
        {contextValue.countTWO}</div>
            <button onClick={()=>contextValue.dispatchTWO('inc')}>Increment</button>
            <button onClick={()=>contextValue.dispatchTWO('dec')}>Decrement</button>
            <button onClick={()=>contextValue.dispatchTWO('res')}>Reset</button>
        </div>
    // </div>
  )
}

export default SharedCompA
