import React from 'react'

function ChildComp(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Click to Greet</button> */}
      <button onClick={()=>props.greetHandler("suresh")}>Click to Greet</button>

    </div>
  )
}

export default ChildComp
