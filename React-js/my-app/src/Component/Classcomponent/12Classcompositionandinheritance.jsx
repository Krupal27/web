import React from 'react';
import { Component } from 'react';
import Demo from './13Demo';

class Classcompositionandinheritance extends Component {
    
    constructor() {
        super()
        this.state = {
            Name: "Krupal"
        }
    }

    render() { 
        return (
            <>
            
            <h3>Classcompositionandinheritance</h3>
            <Demo myname={this.state.Name}>
                <h4>Hello My Name is Krupal</h4>
            </Demo>
            </>
        );
    }
}
 
export default Classcompositionandinheritance;