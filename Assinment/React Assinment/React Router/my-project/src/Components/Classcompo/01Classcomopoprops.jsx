import React from 'react';
import { Component } from 'react';
import Classmaincard from './02Classmaincard';

class Classcompoprops extends Component {
    render() {
        return (
            <>

                <div className="conatiner">
                    <div className="row">
                        <div className="col-3">
                            <Classmaincard img="https://picsum.photos/id/277/400/200" data="Data 1" btn="btn-1"/>
                        </div>
                        <div className="col-3">
                            <Classmaincard img="https://picsum.photos/id/420/400/200" data="Data 2" btn="btn-2"/>
                        </div>
                        <div className="col-3">
                            <Classmaincard img="https://picsum.photos/id/575/400/200" data="Data 3" btn="btn-3"/>
                        </div>
                        <div className="col-3">
                            <Classmaincard img="https://picsum.photos/id/325/400/200" data="Data 4" btn="btn-4"/>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Classcompoprops;