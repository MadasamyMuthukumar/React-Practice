import axios from 'axios'
import React, { Component } from 'react'
class PostReq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler = event =>{
      this.setState({
        [event.target.name] : event.target.value
      })
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

    }
  render() {
    return (
      <div>
        <input type="text" name='userId' value={this.state.userId} onChange={this.changeHandler}/>
        <input type="text" name='title' value={this.state.title} onChange={this.changeHandler} />
        <input type="text" name='body' value={this.state.body} onChange={this.changeHandler}/>
        <button onClick={this.submitHandler}>Submit</button>
      </div>
    )
  }
}

export default PostReq
