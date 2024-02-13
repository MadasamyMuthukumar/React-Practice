import React, { useState } from 'react'
import UEComp1 from './UEComp1'

function MouseContainer() {
    const [display , setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
       {display && <UEComp1 />}
    </div>
  )
}

export default MouseContainer
