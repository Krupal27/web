import React from 'react';
import CompoA from './CompoA';

const Usecontaext = () => {
    let test = "123"
    return (
        <>

            <h3>Usecontaext</h3>
            <CompoA test={test} />

        </>
    );
}

export default Usecontaext;