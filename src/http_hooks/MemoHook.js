import React, { useMemo, useState } from 'react'

function MemoHook() {
    const [cone, setone] = useState(0)
    const [ctwo, settwo] = useState(0)
    const incone = () => {
        setone(cone + 1)
    }
    const intwo = () => {
        settwo(ctwo + 1)
    }
    // const isEven =()=>{    //SLOW FUNCTION IT MAKES DELAY IN RENDERING
    //     let i=0
    //     while(i<900000000) i++
    //     return cone%2==0
    // }
    const isEven = useMemo(   //IT CACHES THE RESULT OF FN AND ONLY COMPUTE AGAIN IF ITS DEPENDENCY CHANGED
        ()=>{ 
              let i=0
                 while(i<900000000) i++
                return cone%2==0
             },[cone]
    )    
     

    return (
        <div>
            {/* WE ARE CALCULATING EVEN OR ODD ONLY FOR CONE.. THE RENDERING SHOULD BE SLOW ONLY FOR FIRST BUTTON CLICKED NOT FOR SECOND BUTTON */}
            <button onClick={incone}>Count 1 : {cone}</button>
            {isEven ? 'even' : 'odd'}

            {/* BUT THE RENDERING SLOW FOR BOTH BUTTONS */}
            <button onClick={intwo}>Count 2 : {ctwo}</button>
        </div>
    )
}

export default MemoHook
/**
 * WHEN THE CONE STATE GET CHANGED THE COMPONENT RE-RENDERS. THIS ALSO RENDERS ISEVEN FUNCTION AGAIN IT MAKES SLOWNESS
 * WE NEED TO TELL REACT THAT NOT CALCULATE ISEVEN WEHEN CONT2 VALUE IS CLICKED
 * USE MEMO ONLY RE COMPUTE THE CACHED VALUE WHEN ONE OF ITS DEPENDENCY IS CHANGED
 */