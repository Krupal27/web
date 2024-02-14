import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    let login = () => {
        if (password !== "") {
            fetch("http://localhost:9988/userdata?password=" + password).then((resp) => {
                resp.json().then((result) => {
                    console.log(result);
                    if (result[0]) {
                        sessionStorage.setItem("name" , name)
                        sessionStorage.setItem("role" , result[0].role)
                        if (result[0].role == 1) {
                            navigate("/admin")
                        }
                        else{
                            navigate("/user")
                        }
                    }
                })
            })
        }
    }

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-25">

            <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form1' type='text' />
            <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4" onClick={login}>Log in</MDBBtn>

            <div className="text-center">
                <p>Not a member? <Link to="/registration">Registration</Link></p>
                <p>or sign up with:</p>

                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                    </MDBBtn>

                </div>
            </div>

        </MDBContainer>
    );
}

export default Login;