import React, { useState } from 'react';

const Taskcrud = () => {

    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [edittext, setEdittext] = useState()
    // const [inputshow, setInputshow] = useState(false)

    let adddata = () => {
        console.log(name);
        setAlldata((newdata) => [...newdata, name])
        setName("")
    }

    let Delete = (i) => {
        console.log(i);
        alldata.splice(i, 1)
        setAlldata([...alldata])
    }

    let Edit = (i) => {
        console.log(i);
        setName(alldata[i])
        setShow(true)
        setEdittext(i)
    }

    let updatedata = () => {
        console.log("update", edittext);
        alldata.splice(edittext, 1, name)
        setAlldata([...alldata])
        setName("")
        setShow(false)
    }

    console.log(alldata);
    console.log(edittext);
    return (
        <>

            <h3>Taskcrud</h3>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {!show ? <button onClick={adddata}>Adddata</button> :
                    <button onClick={updatedata}>Updatedata</button>}
            </div>
            {
                alldata.map((value, i) =>
                    <>
                        <h3>{value}</h3>
                        <button onClick={() => Delete(i)}>Delete</button>
                        <button onClick={() => Edit(i)} >Edit</button>
                    </>

                )
            }

        </>
    );
}

export default Taskcrud;