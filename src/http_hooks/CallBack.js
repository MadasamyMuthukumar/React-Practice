import React, { useCallback, useMemo, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function CallBack() {
    const [age,setAge] = useState(20)
    const [salary,setSalary] =useState(20000)
    const ageHandler = useCallback( //IT CACHES THE FUNCTION..AND ONLY RECOMPUTES IF ITS DEPENDECNY CHANGED
        ()=>{
        setAge(prev=>prev+1)
    },[age]
    ) 
    const salaryHandler = useCallback(
        ()=>{ 
        //callback funciton accepts a function as first parameter and dependecny list as another one...
        setSalary(prev=> prev+1000)
   },[salary]
   ) 

  return (
    <div>
      <Title></Title>
      <Count type="age" count={age}></Count>
      <Button Handler={ageHandler}>Increment Age</Button>
      <Count type="salary" count={salary}></Count>
      <Button Handler={salaryHandler}>Increment Salary</Button>

    </div>
  )
  
}

export default CallBack


/*NOTE:
------
1.WIHTOUT USING React.MEMO ALL THE COMPONENTS ARE RERENDER FOR THE BUTTON CLIKCKS
2.After using react.memo it optimizes the callbacks. it only renders if its dependencies got changed otherwise it wont render.
3.FOR THE ABOVE EXAMPLE THERE IS ONE PROBLEM CALLED REFERENCE EQUALITY
   * IF 'INCREMENT AGE' WAS CLIKED THEN 'COUNT AGE' AND 'INCREMENT AGE' MUST BE RERENDER..BUT ALSO 'INCREMENT SALARY ' GETS RE-RENDERS..
   * THIS IS BECAUSE WHEN THE AGE GET CHANGED THE PARENT COMP RE-RENDERS THEN THE BUTTON COMP THINKS THAT ITS AGAIN PROVIDED WITH NEW METHOD(BUT IT IS A PREVIOUS ONE)
   * TO RESOLVE THIS USE useCallback() 
*/

 