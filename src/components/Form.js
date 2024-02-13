import React, { Component } from 'react'
import './mystyle.css'
import ShowForm from './ShowForm'
class Form extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            username: '',
            age: 'below 20',
            comment: '',
            isSubmitted: false
        }
    }
    namehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    ageHandler = event => {
        this.setState({
            age: event.target.value
        })
    }
    commHandler = event => {
        this.setState({
            comment: event.target.value
        })
    }
    submitHandler = (event) => {
        // <ShowForm username={this.state.username} age={this.state.age} comment={this.state.comment}/>
        //   event.preventDefault()
        // <div>
        // <h2>NAME : {this.state.username}</h2>
        // <h3>AGE : {this.state.age}</h3>
        // <h4>COMMENT : {this.state.comment}</h4>
        // </div>
        // alert(`${this.state.age}`);
        if (this.state.age && this.state.username && this.state.comment) {
            this.setState({
                isSubmitted: true
            })
        } else {
            this.setState({
                isSubmitted: false
            })
        }

        event.preventDefault()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className='container'>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" onChange={this.namehandler} value={this.state.username} ref={this.inputRef}/>
                        <label htmlFor='age'>Age</label>
                        <select id='age' onChange={this.ageHandler}>
                            <option value="below 20" key="fdf">below 20</option>
                            <option value="21-30" key="dfdf">21-30</option>
                            <option value="30+" key="fgf">30+</option>
                        </select>
                        <label htmlFor="text-area">Comments</label>
                        <textarea cols="30" rows="10" id="text-area" onChange={this.commHandler}></textarea>
                        <button type="submit">Submit</button>
                    </div>
                    <div>
                        {/* <h3>{this.state.username}</h3> */}
                    </div>
                </form>
                <div>
                    {this.state.isSubmitted && <ShowForm username={this.state.username} age={this.state.age} comment={this.state.comment} />}
                </div>
            </div>

        )
    }
}

export default Form
