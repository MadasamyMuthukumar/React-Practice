import React, { Component } from 'react'
import InputComp from './InputComp'
class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.compRef=React.createRef()
    }
    
    handler = () =>{
        this.compRef.current.focusInput()
        // focusInput
    }
  render() {
    return (
      <div>
       <InputComp ref={this.compRef}/>
       <button onClick={this.handler}>Click</button>
      </div>
    )
  }
}

export default FocusInput
