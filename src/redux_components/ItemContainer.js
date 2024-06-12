import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
import { buyIce } from '../redux/ice/iceAction'
//we are going to conditionally render the item corresponding to the prop passed form parent component..
function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.itemDis}>Buy Item</button>
    </div>
  )
}
//second parameter passed is own props
const mapStateToProps=(state,ownProps)=>{
//ownProps refers to props belongs to this component.(props passed form parent component to this component)

const itemState=ownProps.cake?state.cake.numOfCakes:state.ice.numOfIce //if cake is passed from parent comp we are going to render cake count otherwise ice count

return {
    item:itemState
}
}



const mapDispatchToProps=(dispatch,ownProps)=>{
    //ownProps refers to props belongs to this component.(props passed form parent component to this component)
    
    const itemState=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIce())//if cake is passed from parent comp we are going to render cake count otherwise ice count
    
    return {
        itemDis:itemState
    }
    }


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
