import React, { useContext } from 'react'
import { channelName, UserContex } from '../App'

function CompC() {
    //BY  USING HOOK
    const user = useContext(UserContex)
    const channel = useContext(channelName)
  return (
    //OLD WAY OF CONSUMING
    // <UserContex.Consumer>
    //     {
    //         username=>{
    //             return(
    //                 <channelName.Consumer>{
    //                     channel =>{
    //                         return <h1>{username},{channel}</h1>
    //                     }
    //                     }
    //                 </channelName.Consumer>
    //             )
    //         }
           
    //     }
    // </UserContex.Consumer>

    <h1>{user},{channel}</h1>
  )
}

export default CompC
