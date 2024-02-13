import React from 'react'

function Title() {
    console.log('rendering title');
  return (
    <div>
    OPEN THE CONSOLE 
    </div>
  )
}

export default React.memo(Title)
