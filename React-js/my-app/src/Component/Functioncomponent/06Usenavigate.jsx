import React from 'react';
import { useNavigate } from 'react-router-dom';

const Usenavigate = () => {

    let navigate = useNavigate()

    let home = () => {
        navigate("/home")
    }

    return (
        <>

            <h3>Usenavigate</h3>
            <button onClick={home}>Navigate</button>

        </>
    );
}

export default Usenavigate;