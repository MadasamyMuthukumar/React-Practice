import React, { Fragment } from 'react'

function Column() {
    const clnames=['Name','Age']
  return (
   <>
   {
    clnames.map(clname=>(
        <React.Fragment key={clname}>
        <th>{clname}</th>
        </React.Fragment>

    ))
   }
   </>
  )
}

export default Column
