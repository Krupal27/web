import React from 'react';
import { Component } from 'react';
import Democompo from './04Democompo';

class Classcompoprops extends Component {
    render() {
        // let user = "Krupal"
        let user = {
            Name: "Krupal",
            Age: 22,
            Location: "Ahmedabad"
        }
        return (
            <>

                <h1>Classcompoprops</h1>
                {/* <p>{user}</p> */}
                {/* <Democompo data = {user}/> */}
                <Democompo data = {user}/>
            </>
        );
    }
}

export default Classcompoprops;