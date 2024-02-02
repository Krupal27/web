import React, { useReducer, useState } from 'react';

const initialstate = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return state + 1
        case "decrement": return state - 1
        case "multi": return state * 5
        case "reset": return initialstate
        default: return state
    }
}

const Usereducer = () => {



    const [count, dispatch] = useReducer(reducer, initialstate)

    // const [count, setCount] = useState(0);
    // let increment = () => {
    //     setCount(count + 1)
    // }
    // let decrement = () => {
    //     setCount(count - 1)
    // }
    return (
        <>

            <h3>Usereducer</h3>
            <p>{count}</p>
            <button className='px-3 py-1 bg-black text-white mx-2 rounded-6' onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button className='px-3 py-1 bg-black text-white rounded-6' onClick={() => dispatch({ type: "decrement" })}>decrement</button>
            <button className='px-3 py-1 bg-black text-white mx-2 rounded-6' onClick={() => dispatch({ type: "multi" })}>multi</button>
            <button className='px-3 py-1 bg-black text-white rounded-6' onClick={() => dispatch({ type: "reset" })}>reset</button>

        </>
    );
}

export default Usereducer;