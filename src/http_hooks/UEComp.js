import React, { useEffect, useState } from 'react'

function UEComp() {
    const [ title , setTitle] = useState('')
    const [ count, setCount ] =useState(0)
//    const changeTitle = e =>{
//         setTitle(e.target.value)
//     }

// const changeTitle = () =>{
//     setDiffer(true)
//     if(isDiffer){
//         document.title=title
//         console.log("it is true");
//         setDiffer(false)
//     }else{
//         console.log("It is false");
//     }
   
// }
//USE EFFECT REQUIRES ARROW FUNCTION AS PARAMETER
    useEffect(()=>{
        console.log('updating document title');
        document.title=count
    },[count])   //IT CONDITIONALY RENDERS..ONLY CHANGE TITLE IF IT IS NOT EQUAL TO PREVIOUS COUNT VALUE
    
  return (
    <div>
      <input type="text" value={title} onChange={e=>setTitle(e.target.value)}  />
      <button onClick={()=>setCount(count+1)} >Set title</button>
    </div>
  )
}

export default UEComp
