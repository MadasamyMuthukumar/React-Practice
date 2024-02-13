import React from 'react'

function Count({type,count}) {
    console.log('rendering '+type);
  return (
    <div>
      <p>{type} : {count}</p>
    </div>
  )
}

export default React.memo(Count)
