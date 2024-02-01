import React from 'react';
import { Fname } from './08Usecontext';
import { useContext } from 'react';

const CompoC = () => {
    let Data = useContext(Fname); // Using Hook
    return (
        <>

            {/* <h1>data</h1> */}
            <h1>{Data}</h1>
            {/* <Fname.Consumer> // Using Api Process
                {
                    (number) => {
                        return <h2>{number}</h2>
                    }
                }
            </Fname.Consumer> */}
            {/* {props.test} */}
        </>
    );
}

export default CompoC;