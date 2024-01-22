import React from 'react';
import { Component } from 'react';
import Clickcount from './Clickcount';
import Hovercount from './Hovercount';

class Maincounter extends Component {
     
    render() { 
        return (
            <>
            
            <Clickcount/>
            <Hovercount/>

            </>
        );
    }
}
 
export default Maincounter;