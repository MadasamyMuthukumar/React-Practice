import React, { Component } from 'react'
import FWDchild from './FWDchild'
class FWDParent extends Component {
    constructor(props) {
      super(props)
    
   this.inpRef=React.createRef()
    }
    handler=()=>{
        this.inpRef.current.focus()
    }
  render() {
    return (
      <div>
        <FWDchild ref={this.inpRef}/>
        <button onClick={this.handler}>CLick</button>
      </div>
    )
  }
}

export default FWDParent
