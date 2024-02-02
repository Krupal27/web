import React, { useEffect, useState } from 'react';


const Api = () => {
    const [userdata, setUserdata] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((resp) => {
            resp.json().then((result) => {
                // console.log(result);
                setUserdata(result);
            })
        })
    },[]);
    console.log(userdata);
    return (
        <>

            <h1>Api</h1>

            <table width="100%" border="1">
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>
                {
                    userdata && userdata.map((item) =>
                        <tr> 
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed.toString()}</td>
                        </tr>
                    )
                }
            </table>


        </>
    );
}

export default Api;