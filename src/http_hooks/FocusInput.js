import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const inpRef = useRef(null)

    useEffect(() => {   //FOCUSING THE INPUT WHEN THEN COMPOJENT MOUNTS FIRST TIME
        inpRef.current.focus()  //react set the inpRef's current property to the corresponding DOM node(input node)
    }, [])

    return (
        <div>
            <input type="text" ref={inpRef} />
        </div>
    )
}

export default FocusInput
