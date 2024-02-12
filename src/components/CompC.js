import React, { Component } from 'react'
import {userConsumer} from './ContextComp'
class CompC extends Component {
  render() {
    return (
      <div>
        <userConsumer>
            {
                (username) =>{
                    return <h1>{username}</h1>
                }
            }
        </userConsumer>
      </div>
    )
  }
}

export default CompC
