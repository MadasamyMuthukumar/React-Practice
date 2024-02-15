import { useState } from "react"


function useInput2(initialState) {
  const [values,setValues] =useState(initialState)
  const reset =()=>{
    setValues(initialState)
  }
  const handleInput=(e)=>{
    const {name,value}=e.target
    setValues({...values,[name]:value})
  }
  return[values,reset,handleInput]
}

export default useInput2
