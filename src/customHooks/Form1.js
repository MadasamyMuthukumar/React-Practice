import React, { useState } from 'react'
import useInput1 from '../hooks/useInput1'

function Form1() {
    // const [firstname,setFirstname]=useState('')
    // const [lastname,setLastname]=useState('')
    const [firstname,bindfirstname,resetFirstname]=useInput1('')
    const [lastname,bindlastname,resetLastname]=useInput1('')
    const shwoData = ()=>{
        alert(`Hi ${firstname},${lastname}`)
        resetFirstname()
        resetLastname()
    }
  return (
    <div>
        <form onSubmit={shwoData}>
      <input type="text" 
      name='firstname' 
      {...bindfirstname} 
      />
      
      <input type="text" name='lastname' {...bindlastname} />   
      <button type='submit'>Submit</button> 
      </form>
    </div>
  )
}

export default Form1
