import React, { useEffect, useReducer, useState } from 'react'
const initialState = {
    name: '',
    age: '',
    submitted:false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.Value ,submitted:false }
        case 'age':
            return { ...state, age: action.Value,submitted:false }
        case 'submit':
            return {...state, submitted:true}
    }
}


function FormReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [isSubmitted, setSubmit] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'submit'})
    }
    const handleChange = (e) => {
        const { name,value } = e.target
        dispatch({type:name , Value:value})
    }
    // useEffect(()=>{
    //     if(isSubmitted){

    //     }
    // })
    return (
        <div>
            <input type="text" name='name' value={state.name} onChange={handleChange} />
            <input type="text" name='age' value={state.age} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {
                    state.submitted && (
                        <div>
                        <h1>{state.name}</h1>
                        <h2>{state.age}</h2>
                        </div>
                    ) 
                }
            </div>
        </div>
    )
}

export default FormReducer
