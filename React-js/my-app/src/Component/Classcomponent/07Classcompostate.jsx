import React, { useState } from 'react';
import { Component } from 'react';

class Classcompostate extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    update = () => {
        if (this.state.count >= 15) {
            return 0
        }
        console.log("update");

        this.setState({ count: this.state.count + 1 })
    }
    decrease = () => {

        if (this.state.count === 0) {
            return 0
        }
        console.log("decrease");
        this.setState({ count: this.state.count - 1 })

    }

    reset = () => {

        this.setState({ count: 0 })
        console.log("reset");
    }

    render() {
        // let data = 0
        return (
            <>
                <h1>Classcompo State</h1>
                {/* <p>{data}</p> */}
                <p>{this.state.count}</p>
                <button className='mx-2' onClick={this.update}>Update State (+)</button>
                <button className='mx-2' onClick={this.decrease}>Decrease (-)</button>
                <button onClick={this.reset}>Reset</button>
            </>
        );
    }
}

export default Classcompostate;