import React, { useReducer } from 'react'



const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1
            break
        case 'dec':
            return state - 1
            break

        case 'res':
            return initialState
            break
    }
}

function ReducerCounter3() {
    //DEALING WITH MULTILPLE STATE VARIABLES HAS SAME STATE TRANSITIONS
    //USE MULTIPLE REDUCERS FOR SAME REDUCER FUNCTION
    //IT PREVENTS DUPLICATING CODE
    //IT AVOIDS THE COMPLEXITY OF MERGING AND UPDATING


    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)  //THE TWO FUNCTIONING INDEPENDENTLY


    return (
        <div>
            <div> Counter 1 : {count}</div>
            <button onClick={() => dispatch('inc')}>Increment</button>
            <button onClick={() => dispatch('dec')}>Decrement</button>
            <button onClick={() => dispatch('res')}>Reset</button>
            <div> Counter 2 : {countTwo}</div>
            <button onClick={() => dispatchTwo('inc')}>Increment</button>
            <button onClick={() => dispatchTwo('dec')}>Decrement</button>
            <button onClick={() => dispatchTwo('res')}>Reset</button>
        </div>
    )
}

export default ReducerCounter3
