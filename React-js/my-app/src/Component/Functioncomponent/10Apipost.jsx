import React, { useEffect, useState } from 'react';


const Apipost = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [id, setId] = useState("")
    const [userdata, setUserdata] = useState([])

    let submit = () => {
        // console.log(name , email , password);
        let data = { id, name, email, password }
        console.log(data);
        fetch("http://localhost:4250/Hoteldata", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            })
        })
    }

    // useEffect(() => {
    //     fetch("http://localhost:4201/Hoteldata").then((resp) => {
    //         resp.json().then((result) => {
    //             setUserdata(result);
    //         })
    //     })
    // })

    return (
        <>

            <h3>Api Post</h3>

            id : <input type="text" value={id}
                disabled onChange={(e) => setId(e.target.value)} /> <br />
            UserName : <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} /> <br />
            Email : <input type="email" name="" id="" value={email}
                onChange={(e) => setEmail(e.target.value)} /> <br />
            Password : <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} /> <br />
            <button onClick={submit}>Submit</button>
            <table width="70%" border="1">
                <tr>
                    <td>Name</td>
                    <td>Emai</td>
                    <td>Possword</td>
                </tr>
                {/* {
                    userdata && userdata.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                        </tr>
                    )
                } */}
            </table>
        </>
    );
}

export default Apipost;