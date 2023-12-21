import React from 'react';
import { Component } from 'react';

class Classcompojsx extends Component {
    render() {
        let user = {
            Name: "Krupal",
            Age: 22,
            Location: "Ahmedabad"
        }
        let data = "Krupal Patel";
        return (

            <>
                <h1>ClasscompoJX</h1>
                <p>{user.Name}</p>
                <p>{user.Age}</p>
                <p>{user.Location}</p>
                <p>{data}</p>
            </>

        );
    }
}

export default Classcompojsx;