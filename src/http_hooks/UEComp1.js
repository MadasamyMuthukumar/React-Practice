import React, { useState,useEffect } from 'react'

function UEComp1() {
const [x,setX] = useState(0)
const [y,setY] = useState(0)
 const mousePosition = e =>{
    console.log("mouse position fired!");
    setX(e.clientX)
    setY(e.clientY)
 }
useEffect(()=>{
    console.log("Use effect fired!");
    window.addEventListener('mousemove',mousePosition)
 
//A RETURNING FN INSDIE USEFFECT FN IS CALLED CLEANUP FN.. IT GET EXECUTED ONLY IF THE COMPONENT IS UNMOUNTED.(LIKE COMPOENTWILLUNMOUNT() METHOD)
//WHILE REMOVING A COMPONENT..WE NEED TO REMOVE ALL ITS SUBSCRITIONS MANUALLY (EX: WINDOW LISTENER)
    return ()=>{                                          
      console.log('cleaup fn fired ! ');
      window.removeEventListener('mousemove',mousePosition)
    }   
},[]) //IF EMPTY ARRAY IS PASSED AS SECOND ARGUMENT THEN USEEFFECT WILL RENDER ONLY AT INITIAL RENDER BUT NOT FOR EVERY RE-RENDERS (IT BEHAVES LIKE COMPONENTDIDMOUNT)

  return (
    <div>
       X - {x} Y - {y}
    </div>
  )
}

export default UEComp1
