import { useState } from "react"

function useInput1(initilaState) {
  const [name,setName] = useState(initilaState)
  const reset = ()=>{
    setName(initilaState)
  }
  const bind = {
    value:name,
    onChange:e=>{
        setName(e.target.value)
    }
  }
  return [name,bind,reset]
}

export default useInput1
