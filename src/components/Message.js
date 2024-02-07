import React, { Component } from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Please subscribe"
        }
        this.change = this.change.bind(this)
    }
    change(){
        this.setState({
            message:"Thankyou!"
        })
    }
    change2 = () =>{
        this.setState({
            message:"Thankyou!"
        })
    }
    render(){
        return( 
            <div>
                <h3>Welcome {this.state.message} </h3>
                <button onClick={()=>this.change()}>inlineArrowFn</button>
                <button onClick={this.change.bind(this)}>inlineBind</button>
                <button onClick={this.change}>ConstructorBind</button>
                {/* <button onClick={this.change2}>ConstructorBind</button> */}
                <button onClick={this.change2}>SeperateArrowFn</button>
            </div>
        ) 
    }
}
export default Message