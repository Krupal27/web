import React from 'react';
import { Component } from 'react';

class Controlledcompo extends Component {

    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    submit = (event) => {
        event.preventDefault()
        console.log(this.state.name);
    }

    // change = (e) =>{
    //     // e.preventDefault()
    //     this.setState({name : e.target.value})
    // }

    render() {
        return (
            <>

                <h3>Controlledcompo</h3>
                <form onSubmit={this.submit}>
                    <input type="text" name="" id="" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                    // onChange={this.change}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Controlledcompo;