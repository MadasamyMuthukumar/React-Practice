import React, { Component } from 'react'
import HoverCount from './HoverCount'
import Count from './Count'


const HOCCOmp = OriginalComp => {
    class NewComp extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        increment = () =>{
            this.setState(prevstate =>({
                count:prevstate.count+1
            }))
        } 
        render(){
            return(
                <OriginalComp count={this.state.count} increment={this.increment} {...this.props} />
                //ABOVE LINE PASSING THREE PROPS TO THE ORIGINALCOMP
                // 1.THE COUNT VALUE
                // 2.THE INCREMENT METHOD
                // 3.ALL THE REMAINING PROPS(IT MAY COME FORM App.JS OR WHEREVER)
                )
        }   

    }
    return NewComp

}

export default HOCCOmp
