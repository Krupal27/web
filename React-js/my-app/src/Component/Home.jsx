import React from "react";
// import Navbar from "../coman-component/Navbar";
// // import img from "./img/hero4.png"

// export default function Home() {
//     return (
//         <>
//             {/* <Navbar/> */}
//             {/* <img src={img} alt="" /> */}
//         </>
//     )
// }

// import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay mx-auto'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody className="mx-auto">
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}