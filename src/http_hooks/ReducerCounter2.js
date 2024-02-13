import React, { useReducer } from 'react'

const initialState = {
    firstcount: 0,
    secondcount: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state, firstcount: state.firstcount + action.value }
        case 'dec':
            return { ...state, firstcount: state.firstcount - action.value }
        case 'incr':
            return { ...state, secondcount: state.secondcount + action.value }
        case 'decr':
            return { ...state, secondcount: state.secondcount - action.value }
        case 'res':
            return initialState
    }
}

function ReducerCounter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (

        <div>
            <h1>First counter {count.firstcount}</h1>
            <h1>Second Counter {count.secondcount}</h1>
            <button onClick={() => dispatch({ type: 'inc', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'dec', value: 1 })}>Decrement</button>
            <div>
                <button onClick={() => dispatch({ type: 'incr', value: 5 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decr', value: 5 })}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'res' })}>Reset</button>
            </div>
        </div>
    )
}

export default ReducerCounter2
