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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let savedata = (e) => {
        e.preventDefault()
        // console.log("submit");
        let data = { name, email, password }
        fetch("http://localhost:4567/userdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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

            <h3>Useradd</h3>

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <form onSubmit={savedata}>
                <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' type='number' />
                <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='name' id='form2' type='text' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='email' id='form3' type='email' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='password' id='form4' type='password' />
                <input type="submit" value="useredit" />
                {/* <button className='w-25 text-white bg-black rounded-3' onClick={savedata}>Submit</button> */}
                </form>
            </MDBContainer>

        </>
    );
}

export default Useredit;