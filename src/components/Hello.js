import React from 'react';
// function abc(){
//     console.log("fdsf")
// }
const Hello = (props) =>{
   
    return(
        <div className="a" id="b">
            <span>Hello {props.name} </span>
            {/* <button onClick={abc}>touch</button> */}
        </div>
    )
    //ABOVE FORMAT IS JSX. ITS CORRESPONDING JS CODE IS BELOW

//   return React.createElement('div',{id:'b',className:'a'}, 
//     React.createElement('span',null,'Hello')
//     )
}
export default Hello
