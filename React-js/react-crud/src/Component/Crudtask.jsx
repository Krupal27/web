import React, { useState } from 'react';

const Crudtask = () => {

    const [name, setName] = useState("");
    const [alldata, setAlldata] = useState([]);
    const [show, setShow] = useState(false)
    const [edittext, setEdittext] = useState()
    // const [showinput, setShowinput] = useState(false)

    let adddata = () => {
        // console.log("adddata");
        // console.log(name);
        if (name.length !== 0) {
            setAlldata((newdata) => [...newdata, name])
            setName("")
        }
    }

    let Delete = (i) => {
        // console.log("Delete" , i);
        alldata.splice(i, 1)
        setAlldata([...alldata])
    }

    let Edit = (i) => {
        console.log("Edit", i);
        setName(alldata[i])
        // setShowinput(true)
        setShow(true)
        setEdittext(i)
    }

    let updatedata = () => {
        console.log(edittext, "updatedata");
        alldata.splice(edittext, 1, name)
        setAlldata([...alldata])
        setName("")
        setShow(false)
    }

    // console.log(alldata);

    return (
        <>

            <h3>CrudTask</h3>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" />
                {!show ? <button className='ms-2 bg-black text-white rounded-2' onClick={adddata}>Adddata</button> :
                    <button className='ms-2 bg-black text-white rounded-2' onClick={updatedata}>update</button>}
            </div>
            {
                alldata.map((value, i) =>
                    <>
                        <h4>{value}</h4>
                        <button onClick={() => Edit(i)}>Edit</button>
                        <button onClick={() => Delete(i)}>Delete</button>
                        {/* {showinput && <input type='text'/>} */}
                    </>
                )

            }

        </>
    );
}

export default Crudtask;