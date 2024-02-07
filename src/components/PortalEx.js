// import React from 'react'
// import ReactDOM from 'react-dom'

// function PortalEx() {
//     return ReactDOM.createPortal(

//         <h1>Inside Portal Demo</h1>,
//         document.getElementById('portal-root')
//     )
// }

// export default PortalEx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalEx extends Component {
    render() {
        return ReactDOM.createPortal(

            <h1>Inside Portal Demo</h1>,
            document.getElementById('portal-root')
        )
    }
}

export default PortalEx


