import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Usercrud2 = () => {

    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])

    let adddata = () => {
        // console.log("submit");
        // console.log(name);
        if (name.length !== 0) {
            setAlldata((newdata) => [...newdata, name])
            setName("")
        }
    }

    // console.log(alldata);

    let Edit = (i) => {
        // console.log("Edit", i);
        setName(alldata[i])
    }
    return (
        <>

            <h3>2Usercrud</h3>
            <div className='w-50 mx-auto'>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <button onClick={adddata} className='ms-2'>Adddata</button>
            </div>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Action</th>
                    </tr>
                    {
                        alldata.map((value, i) =>
                            <tr>
                                <td>{value}</td>
                                <td>
                                    <button onClick={() => { Edit(i) }}>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </MDBTableHead>
            </MDBTable>

        </>
    );
}

export default Usercrud2;