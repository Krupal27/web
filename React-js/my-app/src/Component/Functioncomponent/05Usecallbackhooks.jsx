import React, { useCallback, useState } from 'react';
import Childcompo from './Childcompo';

const Usecallbackhook = () => {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    const data = useCallback(function () {
        
    },[])
    // function data() {
    //     return 
    // }
    return (
        <>
            <h3>Usecallbackhook</h3>
            <Childcompo data={data}/>
            <p>{count}</p>
            <p>{item}</p>
            <button onClick={() => setCount(prevcount => prevcount + 1)}>Updatecount</button>
            <button onClick={() => setItem(previtem => previtem + 1)}>Updateitem</button>
        </>
    );
}

export default Usecallbackhook;