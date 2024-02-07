import React, { Component } from 'react'
import ChildComp from './ChildComp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "kumar"
      }
      this.greetParent=this.greetParent.bind(this)

    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName}! iam ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp


