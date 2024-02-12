import React from 'react'

function ErrorEx({name}) {
    if(name==='vimal'){
        throw new Error('Not a correct name!')
    }
  return (
    <div>
      {name}
    </div>
  )
}

export default ErrorEx

