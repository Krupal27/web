import React, { createRef } from 'react';
import { Component } from 'react';


class Uncontrolledcompo extends Component {

    constructor() {
        super()
        this.input = createRef()
    }

    submit = (event) => {
        console.log(this.input.current.value);
        event.preventDefault()
    }

    render() {
        return (
            <>

                <h2>Uncontrolledcompo</h2>
                <form onSubmit={this.submit}>
                    <input type="text" name="" id="" ref={this.input} />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Uncontrolledcompo;