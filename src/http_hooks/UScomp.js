import React, { useState } from 'react'


function UScomp() {

    const intialCount = 0
    const initialName = {
        firstname: '',
        lastname: ''
    }

    //USING VARIABLE
    const [count, increment] = useState(intialCount)

    //USING OBJECT
    const [name, setName] = useState(initialName)

    //USING ARRAY
    const [fruitsArr, setFruitArr] = useState([])
    const [fruitName, setFruitName] = useState('')

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            increment(prevstate => prevstate + 1)
        }
    }
    const nameSetter = (e) => {
        setName({
            ...name,      //SPREAD OPERATOR 
            //SPREAD OPERATOR USED TO COPY ALL THE PREVIOUS PROPERTIES AND VALUES. 
            [e.target.name]: e.target.value   //HERE ONLY UPDATING THE SPECIFIED THINGS 
        })

    }
    const fruitSetter = () => {
        setFruitArr(
            [...fruitsArr, fruitName]
        )
        setFruitName('')
    }
    const handleInput = (e) => {
        setFruitName(e.target.value)
    }
    return (
        <div>
            <h5>Count {count}</h5>

            <button onClick={() => increment(prevstate => prevstate + 1)}>Increment</button>
            <button onClick={() => increment(prevstate => prevstate - 1)}>Decrement</button>
            <button onClick={() => increment(intialCount)}>Reset</button>
            <button onClick={incrementFive}>Inrement 5</button>

            {/* USE STATE WITH OBJECT */}
            <div>
                <input type="text" name='firstname' value={name.firstname} onChange={nameSetter} />
                <input type="text" name='lastname' value={name.lastname} onChange={nameSetter} />
                <h5>First Name : {name.firstname} </h5>
                <h5>Last Name : {name.lastname} </h5>
                <h5>Object :  {JSON.stringify(name)}</h5>
            </div>

            {/* USE STATEB WITH ARRAY */}
            <div>
                <label for='fruits'>Enter Fruit</label>
                <input id='fruits' type="text" value={fruitName} onChange={handleInput} />
                <button onClick={fruitSetter}>Submit</button>
                <ul>
                    {
                        fruitsArr.map(fruit => (<li key={fruit}>{fruit}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default UScomp
//WHY USING SPREAD OPERATOR
// USESTTATE DOES NOT AUTOMATICALLY MERGE AND UPDATE THE OBJECT LIKE CLASS STATE..WE NEED TO MANUALLY COPY THE PREVIOUS STATE OF OBJECT AND UPDATE