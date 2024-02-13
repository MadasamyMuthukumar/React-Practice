import React from 'react'

function Button({Handler,children}) {
    console.log(`rendering button - ${children}`);
  return (
    <div>
      <button onClick={Handler}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
