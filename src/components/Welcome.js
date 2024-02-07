import React, { Component } from 'react';
class Welcome extends Component{
    render(){
        // const{name1,name2} = this.props    //we can use name1,name2 directly
        return(
            <div>
                <h3>Welcome {this.props.name}</h3>
                {this.props.children}
            </div>
        ) 
    }
}
export default Welcome
