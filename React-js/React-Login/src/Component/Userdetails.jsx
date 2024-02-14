import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Userdetails = () => {

    const [userdata, setUserdata] = useState()
    const { userid } = useParams()

    useEffect(() => {
        fetch("http://localhost:9988/userdata/" + userid).then((resp) => {
            resp.json().then((result) => {
                // console.log(result);
                setUserdata(result)
            })
        })
    }, [])
    console.log(userdata);

    return (
        <>

            <h3>Userdetails</h3>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Role</th>
                    </tr>
                    {
                        userdata && 
                        <tr>
                            <td>{userdata.id}</td>
                            <td>{userdata.name}</td>
                            <td>{userdata.email}</td>
                            <td>{userdata.password}</td>
                            <td>{userdata.role}</td>
                        </tr>
                    }
                </MDBTableHead>
            </MDBTable>


        </>
    );
}

export default Userdetails;