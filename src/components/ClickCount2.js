import React, { Component } from 'react'

class ClickCount2 extends Component {
  render() {
    const {count , increment } = this.props
    return (
      <div>
        <button onClick={increment}>Clikced {count} times</button>
      </div>
    )
  }
}

export default ClickCount2
