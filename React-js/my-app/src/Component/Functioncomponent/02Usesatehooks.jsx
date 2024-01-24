import React, { useState } from 'react';

const Usesatehooks = () => {
    const [count, setCount] = useState(0);
    let addvalue = () => {
        if (count >= 15) {
            return 0
        }
        setCount(count + 1);
    }

    let removevalue = () => {
        if (count === 0) {
            return 0
        }
        setCount(count - 1);
    }

    let reset = () => {
        setCount(0)
    }

    return (
        <>

            <h3>Usesatehooks</h3>
            <p>{count}</p>
            <button onClick={addvalue}>Add Value</button>
            <button className='mx-3' onClick={removevalue}>Remove Value</button>
            <button onClick={reset}>Reset</button>

        </>
    );
}

export default Usesatehooks;