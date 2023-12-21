import React from 'react';
import { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

class Classcard extends Component {
    render() {
        return (
            <>
                {/* <h1>Classcard</h1> */}
                <MDBCard>
                    <MDBCardImage src={this.props.img} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.tital}</MDBCardTitle>
                        <MDBCardText>
                            <p>{this.props.pera}</p>
                        </MDBCardText>
                        <MDBBtn href='#'>{this.props.btn}</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

            </>
        );
    }
}

export default Classcard;