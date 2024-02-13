import React, { Component } from 'react'
import axios from 'axios'
import './stylesheet.css'
// import styles from './ModuleCSS.module.css' 

class Getreq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response.data)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errorMsg:'Error while getting data'
            })
        })
    }
    
  render() {
    const {posts , errorMsg } =this.state
    const postList = posts.map(post => (<div key={post.id}>{post.title}</div>) )
    return (
      <div className="posts">
        <h1>List of Posts</h1>
        <div className='post-list'>
         {/* <div>{postList}</div> */}
         {
            postList.length? posts.map((post,index) => (<div key={post.id}>{index+1} . {post.title}</div>) ):null
         }
         {
            errorMsg ? <div> {errorMsg }</div> : null
         }
         </div>
      </div>
    )
  }
}

export default Getreq
