import React from 'react';
import { Component } from 'react';


class Democompo extends Component { 
    render() { 
        return (
            <>
            
            <h1>Demo</h1>
            {/* <p>{this.props.data}</p> */}
            <p>{this.props.data.Name}</p>
            <p>{this.props.data.Age}</p>
            <p>{this.props.data.Location}</p>
            </>
        );
    }
}
 
export default Democompo;