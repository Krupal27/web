import React from 'react';
import { Component } from 'react';

class Listandkeys extends Component {

    constructor() {
        super()
        this.state = {
            item: [1, 2, 3, 4, 5]
        }
    }
    additems = () => {
        console.log("additems");
        this.setState({
            item: [6, 7, 1, 2, 3, 4, 5]
        })
    }
    render() {
        // let data = [1, 2, 3, 4]
        let items = this.state.item.map((value) => <li key={value.toString()}>{value}</li>)
        return (
            <>
                <h3>Listandkeys</h3>
                {/* <ul>
                    <li>{data[0]}</li>
                    <li>{data[1]}</li>
                    <li>{data[2]}</li>
                    <li>{data[3]}</li>
                </ul> */}

                <ul>
                    {items}
                </ul>
                <button onClick={this.additems}>Additems</button>
            </>
        );
    }
}

export default Listandkeys;