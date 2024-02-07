import React from 'react'

function ShowForm(props) {
  return (
    <div>
      <h2>NAME : {props.username}</h2>
      <h3>AGE : {props.age}</h3>
      <h4>COMMENT : {props.comment}</h4>
    </div>
    // {()=>props.submitHandler}
    // <button onClick={()=>props.submitHander}>click</button>
    // shows()
    
  )
}

export default ShowForm
