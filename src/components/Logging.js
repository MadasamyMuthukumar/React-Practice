import React, { Component } from 'react'
class Logging extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // return this.state.isLoggedIn ? (<div>Welcome Dani</div> ): (<div>Welcome Guest</div>)
        return this.state.isLoggedIn && <div>Welcome Dani</div> || <div>Welcome Guest</div>
    }
}

export default Logging
