import React from 'react';
import { Component } from 'react';

class Classcompostate extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increase = () => {
        console.log("Increase");
        this.setState({count: this.state.count + 1})
    }
    decrease = () => {
        console.log("Decrease");
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <>

                <h1>ClasscompoState</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.increase} className='mx-2'>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </>
        );
    }
}

export default Classcompostate;