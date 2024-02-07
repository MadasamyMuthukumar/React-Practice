import React, { Component } from 'react'

class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  increment(){
    // this.setState({
    //   count:this.state.count+1
    // },()=>{
    //   console.log('Callback value: '+this.state.count);   //provide log as call back value then only it give accurate result
    // })
    // // console.log('Normal value :'+this.state.count);   

    this.setState((prevstate,props)=>({  //setstae has two arguments, previousstate of state and probs
      count:prevstate.count+1
    }))
  }
  DecrementThree(){
    this.setState((prevstate,props)=>({
      count:prevstate.count-3
    }))
  }
  incrementThree(){
    this.increment();
    this.increment();
    this.increment();
  }
  Reset(){
    this.setState({
      count:0
    })
  }
  
  render() {
    return (
      <div>
        <div>COUNT : {this.state.count}</div>
        <button onClick={()=>this.incrementThree()}>Increment</button>
        <button onClick={()=>this.DecrementThree()}>Decrement</button>
        <button onClick={()=>this.Reset()}>Reset</button>
      </div>
    )
  }
}

export default Count
