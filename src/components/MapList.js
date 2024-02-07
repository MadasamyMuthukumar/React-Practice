import React from 'react'
import Person from './Person'
function MapList(props) {
    const names = ['kumar','kousik','suresh'];
    const nameList = names.map(name => <p key={name}>{name}</p>) //using array value as key
    const nameLists = names.map((name,index) => <p key={index}>{name}</p>) //using index as key
    //USE INDEX AS KEY ONLY IF
    //  *iTEMS IN THE LIST DO NOT HAVE ANY UNIQUE id
    //  * THE LIST IS STATIC AND WILL NOT ADD OR REMOVE
    const persons = [
        {
            id:1,
            name:"kumar",
            age:18
        },
        {
            id:2,
            name:"kousik",
            age:20
        }
    ]
    const personList =persons.map(person => (<Person key={person.id} person={person}/>))
  return (
  
    <div>
      <span className={props.class}>{nameList}</span>
      <span>{personList}</span>
    </div>

  )
}

export default MapList
