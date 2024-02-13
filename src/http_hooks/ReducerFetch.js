import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

function ReducerFetch() {
    const initialState = {
        loading: true,
        post: {},
        error: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'success':
                return {
                    loading: false,
                    post:action.payload,
                    error: ''
                }
            case 'error':
                return {
                    loadin: false,
                    post: {},
                    error: 'something went wrong!'
                }
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'success',payload:res.data})
            console.log(res.data);
        })
        .catch(err=>{
            dispatch({type:'error'})
        })
    },[])
    return (
      
        <div>
            {state.loading? 'loading....':state.post.title}
            {state.error ? state.error : ''}

        </div>
    )
}

export default ReducerFetch
