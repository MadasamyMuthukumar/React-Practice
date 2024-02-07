import React from 'react'

function ClickEvents() {
    function makeChange(){
        console.log("clicked");
    }
  return (
    <div>
      <button onClick={makeChange}>Touch</button>
    </div>
  )
}

export default ClickEvents
