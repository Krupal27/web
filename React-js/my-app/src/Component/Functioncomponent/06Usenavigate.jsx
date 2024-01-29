import React from 'react';
import { useNavigate } from 'react-router-dom';

const Usenavigate = () => {

    const navigate = useNavigate();

    let Home = () =>{
        navigate("/home")
    }
    return ( 
        <>
        
        <h3>Usenavigate</h3>
        <button onClick={Home}>Navigate</button>
        
        </>
     );
}
 
export default Usenavigate;