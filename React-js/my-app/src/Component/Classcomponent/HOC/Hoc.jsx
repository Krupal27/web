import React from 'react';
import { Component } from 'react';

const HOC = Original => {

    class Newcompo extends Component {

        constructor() {
            super()
            this.state = {
                count: 0
            }
        }

        update = () => {
            this.setState({
                count: this.state.count + 1
            })
        }



        render() {
            return (
                <>

                    <Original count={this.state.count} update={this.update} />

                </>
            );
        }
    }

    return Newcompo
}

export default HOC