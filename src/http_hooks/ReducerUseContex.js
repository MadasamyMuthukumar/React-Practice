import React, { useReducer } from 'react'
import { sharedContext } from '../components/ContextComp'
import SharedCompA from './SharedCompA'
import SharedCompB from './SharedCompB'

const initialState=0
const reducer = (state, action) => {  //BASED ON ACTION  IT PERFORMS SOMETHING AND RETURNS THE STATE
    switch (action) {
        case 'inc':
            return state + 1
            break
        case 'dec':
            return state-1
            break

        case 'res':
            return initialState
            break

    }
}
function ReducerUseContex() {
    const [count , dispatch] = useReducer(reducer,initialState)
    const [countTwo,dispatchTwo] =useReducer(reducer,initialState)
  return ( 
    //THE COUNT VALUE OF THIS COMPONENT CAN BE SHARED TO MANY COMPONENTS AND IT CAN BE HANDLED FROM ANY WHERE, WHEREEVER IT IS PROVIDED
    <sharedContext.Provider value={{countVal:count,countDisp:dispatch,countTWO:countTwo,dispatchTWO:dispatchTwo}}>
    <div>
        <SharedCompA></SharedCompA> {/*BOTH COMPA AND COMPB CAN HANDLE COUNT VLAUE OF THIS COMPONENT*/}
        <SharedCompB></SharedCompB>
    </div>
    </sharedContext.Provider>
  )
}

export default ReducerUseContex
