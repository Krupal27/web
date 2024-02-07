import React, { useState } from 'react';

import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

const Useredit = () => {

    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")

    let savedata = (e) => {
        e.preventDefault()
        // console.log("submit");
        let data = { id, name, age, location }
        fetch("http://localhost:7501/userdata", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                console.log(result);
            })
        })
    }

    return (
        <>

            <h3>Useredit</h3>

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <form onSubmit={savedata}>
                    <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='tel' />
                    <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='name' id='form2' type='text' />
                    <MDBInput value={age} onChange={(e) => setAge(e.target.value)} wrapperClass='mb-4' label='Age' id='form3' type='tel' />
                    <MDBInput value={location} onChange={(e) => setLocation(e.target.value)} wrapperClass='mb-4' label='location' id='form4' type='text' />
                    <input type="submit" value="useredit" />
                    {/* <button >Submit</button> */}
                </form>
            </MDBContainer>

        </>
    );
}

export default Useredit;