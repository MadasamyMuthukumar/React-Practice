import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';
function HookCakeContainer() {
    //similar to mapStateToPRops it recieves reudx state as argument and returna s value
    const numOfCakes=useSelector(state => state.cake.numOfCakes)  //cake is key specified in root reudcer

    //returna s refernce of dispatch fn from redux store
    const dispatch=useDispatch()
    console.log(numOfCakes);
  return (
    <div>
    <h2>Num of Cakes - {numOfCakes}</h2>
    <button onClick={()=>dispatch(buyCake())}>Buy Cake</button> 
 </div>
  )
}

export default HookCakeContainer
