import React, { Component } from 'react';
// import { Component } from 'react';
import Classcard from './05Classcard';


class Classmaincard extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/237/200/100" pera="lorem data" btn="BTN-1" tital="Img-1" />
                    </div>
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/238/200/100" pera="lorem data" btn="BTN-2" tital="Img-2"/>
                    </div>
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/239/200/100" pera="lorem data" btn="BTN-3" tital="Img-3"/>
                    </div>
                    <div className="col-xl-3">
                        <Classcard img="https://picsum.photos/id/240/200/100" pera="lorem data" btn="BTN-4" tital="Img-4"/>
                    </div>
                </div>

            </>
        );
    }
}

export default Classmaincard;