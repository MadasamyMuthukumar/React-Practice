import React from 'react'

// function FWDchild() {
//   return (
//     <div>

//     </div>
//   )
// }
const FWDchild = React.forwardRef((props,ref) => {
    return (
        <div>
<input type="text" ref={ref} />
        </div>
    )
}) 

export default FWDchild
