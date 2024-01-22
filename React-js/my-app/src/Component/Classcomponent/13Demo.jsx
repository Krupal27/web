import React from 'react';
import { Component } from 'react';


class Demo extends Component {
    constructor() {
        super()
        this.state = {
            Name: "Krupal"
        }
    }

    render() {
        return (
            <>

                <h4>{this.props.children}</h4>

            </>
        );
    }
}

export default Demo;