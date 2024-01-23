import React from 'react';
import { Component } from 'react';


class Demo extends Component {
    

    render() {
        return (
            <>

                <h4>{this.props.myname}</h4>
                <h4>{this.props.children}</h4>

            </>
        );
    }
}

export default Demo;