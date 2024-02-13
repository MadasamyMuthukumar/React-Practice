import React, { useReducer } from 'react'

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
function ReducerCounter() {
    //USE REDUCRER HAS TOW ARGUMENTS = REDUCER FUNCTION AND INTIAL STATE
  const [count,dispatch] = useReducer(reducer, initialState) 
  // IT RETURNS PAIR OF VALUES
//   1.NEWSTATE = ( ANY VALUE)
//   2.METHOD = (WHICH ACCEPTS THE ARGUMENTS NEEDS TO BE PASSED AS 'ACTION' FOR REDUCER METHOD)
    return (      
        <div>
            <div> {count}</div>
            <button onClick={()=>dispatch('inc')}>Increment</button>
            <button onClick={()=>dispatch('dec')}>Decrement</button>
            <button onClick={()=>dispatch('res')}>Reset</button>
        </div>
    )
}

export default ReducerCounter
