import React, { Component } from 'react'

class InputComp extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                {/* <button onClick={()=>this.props.focus(this.focusInput)}>Click</button> */}
            </div>
        )
    }
}

export default InputComp
