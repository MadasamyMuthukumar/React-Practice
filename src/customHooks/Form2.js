import React from 'react'
import useInput2 from '../hooks/useInput2'

function Form2() {
    const [value,reset,handleInput]=useInput2({username:'',age:''})
    const showData =(e)=>{
        e.preventDefault()
        alert(`I am ${value.username}, My age is ${value.age}`)
        reset()
    }
  return (
    <div>
      <form onSubmit={showData}>
        <input type="text" name='username' value={value.username} onChange={handleInput}/>
        <input type="text" name='age' value={value.age} onChange={handleInput}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form2
