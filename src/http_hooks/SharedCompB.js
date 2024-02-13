import React, { useContext } from 'react'
import { sharedContext } from '../components/ContextComp'
function SharedCompB() {
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
      </div>
    )
}

export default SharedCompB
