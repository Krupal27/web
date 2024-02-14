import React, { useEffect, useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';



const Useredit = () => {

    let { userid } = useParams()
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:9988/userdata/" + userid).then((resp) => {
            resp.json().then((result) => {
                console.log(result);
                setId(result.id)
                setName(result.name)
                setEmail(result.email)
                setPassword(result.password)
                setRole(result.role)
            })
        })
    }, [])

    let savedata = (e) => {
        e.preventDefault()
        let data = { id, name, email, password, role }
        fetch("http://localhost:9988/userdata/" + userid, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                console.log(result);
                navigate("/admin")
            })
        })
    }

    return (
        <>

            <h3>Useredit</h3>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <form onSubmit={savedata}>
                    <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' type='number' />
                    <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='name' id='form2' type='text' />
                    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='email' id='form3' type='email' />
                    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='password' id='form4' type='password' />
                    <MDBInput value={role} onChange={(e) => setRole(e.target.value)} wrapperClass='mb-4' label='role' id='form4' type='text' />
                    <input type="submit" value="useredit" className='w-25 text-white bg-black rounded-3' />
                    {/* <button className='w-25 text-white bg-black rounded-3' onClick={savedata}>Submit</button> */}
                </form>
            </MDBContainer>

        </>
    );
}

export default Useredit;