import React from 'react'

function Person({person}) {
  return (
    <div>
      <p>I am {person.name}, My age is {person.age}</p>
    </div>
  )
}

export default Person
