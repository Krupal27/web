import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const Userdetails = () => {

    let { userid } = useParams();
    const [userdata, setUserdata] = useState({})

    useEffect(() => {
        fetch("http://localhost:4567/userdata/" + userid).then((resp) => {
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
                    </tr>
                    {
                        userdata &&
                        <tr>
                            <td>{userdata.id}</td>
                            <td>{userdata.name}</td>
                            <td>{userdata.email}</td>
                            <td>{userdata.password}</td>
                        </tr>
                    }
                </MDBTableHead>
            </MDBTable>





        </>
    );
}

export default Userdetails;