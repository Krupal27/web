import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Userdata = () => {

    const [userdata, setUserdata] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4567/userdata").then((resp) => {
            resp.json().then((result) => {
                // console.log(result);
                setUserdata(result)
            })
        })
    }, []);
    console.log(userdata);


    let useraddnav = () => {
        navigate("/useradd")
    }

    let Edit = (id) => {
        navigate("/Useredit/" + id)
        console.log(id);
    }

    let Details = (id) => {
        console.log(id);
        navigate("/userdetails/" + id)
    }

    let Delete = (id) => {
        console.log(id);


        if (window.confirm("do you want to delete")) {
            fetch("http://localhost:4567/userdata/" + id, {
                method: "DELETE"
            }).then((resp) => {
                alert("Data was removed successfully")
                window.location.reload()
            }).catch((er) => {
                console.log(er);
            })
        }
    }

    return (
        <>

            <h3>Userdata</h3>

            <button className='mx-3 my-4 bg-black text-white rounded-3' onClick={useraddnav}>adduser</button>

            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>name</th>
                        <th scope='col'>email</th>
                        <th scope='col'>password</th>
                        <th scope='col'>action</th>
                    </tr>
                    {
                        userdata && userdata.map((val) =>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>
                                    <tr><button className='bg-black text-white rounded-2 px-2 me-1' onClick={() => { Edit(val.id) }}>Edit</button>
                                        <button className='bg-black text-white rounded-2 px-2 me-1' onClick={() => { Details(val.id) }}>Details</button>
                                        <button className='bg-black text-white rounded-2 px-2' onClick={() => { Delete(val.id) }}>Delete</button>
                                    </tr>
                                </td>
                            </tr>
                        )
                    }
                </MDBTableHead>
            </MDBTable>




        </>
    );
}

export default Userdata;