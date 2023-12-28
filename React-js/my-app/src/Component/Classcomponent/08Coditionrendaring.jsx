import React from 'react';
import { Component } from 'react';

class Conditionrendaring extends Component {
    constructor() {
        super()
        this.state = {
            islogin: true
        }
    }
    render() {
        // return (
        //     <>

        //         <h1>ConditionRendaring</h1>
        //         {/* <p>Welcome to my Website</p>
        //         <p>Try Again</p> */}
        //     </>
        // );

        // if(this.state.islogin){
        //     return <p>Welcome to my Website</p>
        // }
        // else{
        //     return <p>Try Again</p>   
        // }

        // let msg
        // if (this.state.islogin) {
        //     msg = <p>Welcome to my Website</p>
        // }
        // else{
        //     msg = <p>Try Again</p> 
        // }
        // return msg

       return this.state.islogin ? <p>Welcome to my Website</p> : <p>Try Again</p>

            // return this.state.islogin && <p>Welcome to my Website</p>
    }
}

export default Conditionrendaring;