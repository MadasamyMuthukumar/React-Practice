import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    tick = () =>{
        this.setState(prevstate=>({
            count:prevstate.count+1
        }))
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default ClassTimer
