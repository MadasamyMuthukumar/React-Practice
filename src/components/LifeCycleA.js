import { logDOM } from '@testing-library/react';
import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vijay'
      }
      console.log('LifeCycleA Constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        
      </div>
      
    )
  }
}

export default LifeCycleA
