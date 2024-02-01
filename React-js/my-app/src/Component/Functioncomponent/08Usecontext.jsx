import React from 'react';
import CompoA from './CompoA';
import { createContext } from 'react';

const Fname = createContext()

const Usecontaext = () => {
    let test = 'Hello'
    return (
        <>

            <h3>Usecontaext</h3>
            <Fname.Provider value={test}>
                <CompoA />
            </Fname.Provider>

        </>
    );
}

export default Usecontaext;
export {Fname};