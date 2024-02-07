import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Userdata = () => {

    const [userdata, setUserdata] = useState("")

    useEffect(() => {
        fetch("http://localhost:7501/userdata").then((resp) => {
            resp.json().then((result) => {
                // console.log(result);
                setUserdata(result)
            })
        })
    }, []);
    console.log(userdata);

    let navigate = useNavigate()

    let useraddnav = () => {
        navigate("/useradd")
    }

    return (
        <>

            <h3>Userdata</h3>

            <button className='mx-3 my-4 bg-black text-white rounded-3' onClick={useraddnav}>Useradd</button>

            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>name</th>
                        <th scope='col'>age</th>
                        <th scope='col'>location</th>
                    </tr>
                    {
                        userdata && userdata.map((val) =>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.location}</td>
                            </tr>
                        )
                    }
                </MDBTableHead>
            </MDBTable>




        </>
    );
}

export default Userdata;