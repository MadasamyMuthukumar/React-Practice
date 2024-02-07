import React, { Component } from 'react'
class ClassClik extends Component {
    change(){
        console.log("Youa are here!");
    }
  render() {
    return (
      <div>
        <button onClick={this.change}>Class Click</button>
      </div>
    )
  }
}

export default ClassClik
