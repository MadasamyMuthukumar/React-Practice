import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function ChangeTitle1() {
    const [count,setCount] =useState(0)
    useDocumentTitle(count)
  return (
    <div>
      <button onClick={()=>setCount(prev=>prev+1)}>Count {count} </button>
    </div>
  )
}

export default ChangeTitle1
