import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Coman-compo/Navbar';
import Userdata from "./Component/Userdata";
import Useradd from "./Component/Useradd";
import Useredit from "./Component/Useredit";
import Userdelet from "./Component/Userdelet"
import Userdetails from './Component/Userdetails';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /></>
    },
    {
        path: "/userdata",
        element: <><Navbar /><Userdata /></>
    },
    {
        path: "/useradd",
        element: <><Navbar /><Useradd /></>
    },
    {
        path: "/useredit/:userid",
        element: <><Navbar /><Useredit /></>
    },
    {
        path:"/userdetails/:userid",
        element:<><Navbar/><Userdetails/></>
    },
    {
        path: "/userdelet/:userid",
        element: <><Navbar /><Userdelet /></>
    }
])

export default Mainrouter;