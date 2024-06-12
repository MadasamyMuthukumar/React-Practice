import { buyIce } from "../redux/ice/iceAction"
import { connect } from "react-redux"
 function IceContainer(props){
    return(
        <div>
           <h2>Number of Ice - {props.numOfIceprop}</h2>
           <button onClick={props.buyIceprop}>Buy Ice</button> 
        </div>
    )
}
//recieves state as arg and returns object
const mapStateToProps= state=>{
    // 1.irrespective of whatever props CakeContainer is receiving it also now recieve numOfCakesprops which reflects numOFCakes in redux store  as props
    // 2.when you want to acces redux state in our comp you need to use mapStateTOPRops component
    // 3.which gets redux state as parameter and helps to retrieve the appropriate property

    return{
        numOfIceprop:state.ice.numOfIce //ice is key specified in root reudcer
        //in our case we map sate.numofCakes to numofcakesprop and we are using that in our component
    }
}
//recieves dispatch fn as arg and returns object
const mapDispatchToProps=dispatch=>{
    //  1.maps dispatch of an action creator to prop in our component

    //  2.gets dispatch fn as parameter and allows us to map action creators to props in our component
    return{
        buyIceprop:()=>dispatch(buyIce())
        //in our ex we map buyCake action creator to the prop buycakeprop and we are usin gthat in button
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceContainer)

//connect function connects the react component to redux store
// in our ex: it connects cake container to redux store