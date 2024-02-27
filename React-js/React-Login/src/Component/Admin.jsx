import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Admin = () => {

    const [userdata, setUserdata] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        let name = sessionStorage.getItem("name")
        let role = sessionStorage.getItem("role")
        if (name == "" || name == null || role != 1) {
            navigate("/login")
        }
        fetch("http://localhost:9988/userdata").then((resp) => {
            resp.json().then((result) => {
                // console.log(result);
                setUserdata(result)
            })
        })
    }, [userdata])
    // console.log(userdata);

    let Edit = (id) => {
        // console.log(id);
        navigate("/useredit/" + id)
        // console.log("Edit");
    }

    let Details = (id) => {
        // console.log(id);
        navigate("/userdetails/" + id)
    }

    let Delete = (id) => {
        // console.log(id);
        if (window.confirm("do you want to delete")) {
            fetch("http://localhost:9988/userdata/" + id, {
                method: "DELETE"
            }).then((resp) => {
                resp.json().then((result) => {
                    // console.log(result);
                    alert("you data romove successfully")
                })
            })
        }
    }

    return (
        <>

            <h3>Admin</h3>
            <Link to="/registration"><button className='m-2 px-3 bg-black text-white rounded-3'>Add User</button></Link>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Role</th>
                        <th scope='col'>Action</th>
                    </tr>
                    {
                        userdata && userdata.map((val) =>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.role}</td>
                                <td>
                                    <button className='me-2 bg-black text-white rounded-2' onClick={() => { Edit(val.id) }}>Edit</button>
                                    <button className='me-2 bg-black text-white rounded-2' onClick={() => { Details(val.id) }}>View</button>
                                    <button className='bg-black text-white rounded-2' onClick={() => { Delete(val.id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </MDBTableHead>
            </MDBTable>

        </>
    );
}

export default Admin;