import { useState } from "react"
import { buyCake } from "../redux/cakes/cakeActions"
import { connect } from "react-redux"
import { buyCakeWithPayload } from "../redux/cakes/cakeActions"
 function Payload(props){
    const [number,setNUmber]=useState(1)
    return(
        <div>
           <h2>Number of Cakes - {props.numOfCakesprop}</h2>
           <input type="text" value={number} onChange={e=>setNUmber(e.target.value)}/>
           <button onClick={()=>props.buyCakeprop(number)}>Buy {number} Cake</button> 
        </div>
    )
}
//recieves state as arg and returns object
const mapStateToProps= state=>{
    // 1.irrespective of whatever props CakeContainer is receiving it also now recieve numOfCakesprops which reflects numOFCakes in redux store  as props
    // 2.when you want to acces redux state in our comp you need to use mapStateTOPRops component
    // 3.which gets redux state as parameter and helps to retrieve the appropriate property

    return{
        numOfCakesprop:state.cake.numOfCakes  //cake is key specified in root reudcer
        //in our case we map sate.numofCakes to numofcakesprop and we are using that in our component
    }
}
//recieves dispatch fn as arg and returns object
const mapDispatchToProps=dispatch=>{
    //  1.maps dispatch of an action creator to prop in our component

    //  2.gets dispatch fn as parameter and allows us to map action creators to props in our component
    return{
        buyCakeprop:number=>dispatch(buyCake(number))
        //in our ex we map buyCake action creator to the prop buycakeprop and we are usin gthat in button
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Payload)

//connect function connects the react component to redux store
// in our ex: it connects cake container to redux store