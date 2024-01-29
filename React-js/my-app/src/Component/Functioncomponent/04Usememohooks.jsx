import React, { useState } from 'react';
import { useMemo } from 'react';

const Usememohook = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    let updatecount = () => {
        setCount(prevcount => prevcount + 1)
    }
    let updateitem = () => {
        setItem(prevcount => prevcount + 1)
    }

    const multicount = useMemo(function () {
        console.log("multicount");
        return count + 5
    },[count])

    return (
        <>

            <p>{count}</p>
            <p>{multicount}</p>
            <p>{item}</p>
            <button className='mx-3' onClick={updatecount}>Updatecount</button>
            <button onClick={updateitem}>Updateitem</button>

        </>
    );
}

export default Usememohook;