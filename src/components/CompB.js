import React, { Component } from 'react'
import CompC from './CompC'
import ContextComp from './ContextComp'
class CompB extends Component {
  render() {
    return (
      <div>
        Component B Context {this.context}
        <CompC></CompC>
      </div>
    )
  }
}
CompB.contextType=ContextComp   //LIMITATIONS FOR THIS METHOD
                                //CANT CONSUME MORE THAN ONE CONTEXT VALUES

export default CompB
