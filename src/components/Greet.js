import React from 'react';
// function Greet(){
//     return <h1> Hello Saaket </h1>
// }
const Greet = propes =>{    //otherwise const Greet = (name1,name2) => {}
    // const {name1,nam2} = props   another way
 return (
    <div>
    <h1> Greetings {propes.name} ! </h1>
    <p>{propes.prof}</p>
    <div>
    <p>{propes.children}</p>
    </div>
    
    </div>
)
} 
export default Greet //we can import this using any name
// export const Greet = () => <h1> Hello Saaket </h1>; need to be import with exact name like
                               // import { Greet } from './components/Greet'