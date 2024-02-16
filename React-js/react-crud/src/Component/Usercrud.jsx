import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Usercrud = () => {

    const [name, setName] = useState("")
    const [olddata, setOlddata] = useState([])
    let Submit = () => {
        // console.log("submit");
        // console.log(name);
        if (name.length !== 0) {
            setOlddata((newdata) => [...newdata, name]);
            setName("");
        }
    }
    let Edit = (i) => {
        // console.log("Edit");
        // console.log(i);
        // console.log(name);
        setName(olddata[i])

    }
    console.log(olddata);
    // console.log(name);



    return (
        <>

            <h3>Usercrud</h3>
            <div className='w-50 mx-auto'>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <button onClick={Submit} className='bg-black text-white rounded-3 ms-3'>Submit</button>
            </div>

            <MDBTable>
                <MDBTableHead>
                    <tr>
                        {/* <th scope='col'>Id</th> */}
                        <th scope='col'>Name</th>
                        {/* <th scope='col'>Email</th> */}
                        {/* <th scope='col'>Password</th> */}
                        <th scope='col'>Action</th>
                    </tr>
                    {
                        olddata.map((value, i) =>
                            <tr>
                                <td>{value}</td>
                                <td>
                                    <button className='bg-black text-white rounded-3 me-2' onClick={()=> {Edit(i)}}>Edit</button>
                                    <button className='bg-black text-white rounded-3'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </MDBTableHead>
            </MDBTable>

        </>
    );
}

export default Usercrud;