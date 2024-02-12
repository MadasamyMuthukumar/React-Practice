import React, { Component } from 'react'
import HOCCOmp from './HOCCOmp'
class HoverCount extends Component {
    
  render() {
    const {count , increment,name } = this.props
    return (
      <div>
    <h1 onMouseOver={increment}>{name} Hovered {count} Times</h1>
      </div>
    )
  }
}

export default HOCCOmp(HoverCount)
