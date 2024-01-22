import React from 'react';
import { Component } from 'react';
import HOC from './Hoc';

class Clickcount extends Component {
    
    // constructor(){
    //     super()
    //     this.state = {
    //         count : 0
    //     }
    // }

    // update = () =>{
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    render() { 
        return (
            <>
            
            <h4>{this.props.count}</h4>
            <button onClick={this.props.update}>Update Value</button>

            </>
        );
    }
}
 
export default HOC(Clickcount);