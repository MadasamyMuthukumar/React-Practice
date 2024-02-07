import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
class CompCheck extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'kumar'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'kumar'
            })
        },2000)

    }
  render() {
    console.log('******************Parent Component****************');
    return (
      <div>
        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
        {/* <PureComp /> */}
      </div>
    )
  }
}

export default CompCheck
