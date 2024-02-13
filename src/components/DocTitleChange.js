import React, { Component } from 'react'

class DocTitleChange extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count}`  //DISPLAY TITLE AFTER INITIAL RENDER
    }
    componentDidUpdate(props,prevstate){
      if(prevstate.count != this.state.count){
        document.title=`Clicked ${this.state.count}` //DISPLAY TITLE AFTER ALL RENDERS EXCEPT INITIAL
        console.log(prevstate.count)
        console.log(props);
      }
        
    }
    
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count:this.state.count + 1})}>Click</button>
        {/* <button onClick={() => this.setState(prevstate=>({count:prevstate.count+1}))}>Click</button> */}
      </div>
    )
  }
}

export default DocTitleChange
