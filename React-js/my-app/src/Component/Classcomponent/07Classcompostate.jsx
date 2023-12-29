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
    render() {
        // let data = 0
        return (
            <>
                <h1>Classcompo State</h1>
                {/* <p>{data}</p> */}
                <p>{this.state.count}</p>
                <button className='mx-2' onClick={this.update}>Update State (+)</button>
                <button onClick={this.decrease}>Decrease (-)</button>
            </>
        );
    }
}

export default Classcompostate;