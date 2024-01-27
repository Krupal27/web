import React, { useLayoutEffect, useState } from 'react';
import { useEffect } from 'react';

const Useeffecthooks = () => {

    const [count, setCount] = useState(0)

    let update = () =>{
        setCount(prevcount => prevcount + 1)
    }

    let remove = () =>{
        setCount(prevcount => prevcount - 1)
    }

    // useEffect(() => {
    //     alert("Hello useEffect")
    // },[])

    useLayoutEffect(() => {
        alert("hello useLayoutEffect  ")
    },[])
    
    return (
        <>
            <h3>useEffect</h3>
            <p>{count}</p>
            <button className='mx-2 bg-black text-white rounded-4' onClick={update}>Update</button>
            <button className='bg-black text-white rounded-4' onClick={remove}>Remove</button>
        </>
    );
};

export default Useeffecthooks;