import React from 'react'
   //INLINE CSS IS DEFINED AS OBJECT 
const heading ={
    fontSize: '30px',  //PROPERTY MUST BE CAMEL CASED
    color: 'blue'
}
function Inline() {
 
  return (
    <div>
      <span style={heading}>Inline CSS</span>
    </div>
  )
}

export default Inline
