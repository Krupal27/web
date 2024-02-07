import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Coman-compo/Navbar';
import Userdata from "./Component/Userdata";
import Useradd from "./Component/Useradd";
import Useredit from "./Component/Useredit";
import Userdelet from "./Component/Userdelet"

const Mainrouter = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <><Navbar /></>
    // },
    {
        path: "/userdata",
        element: <><Navbar /><Userdata /></>
    },
    {
        path: "/useradd",
        element: <><Navbar /><Useradd /></>
    },
    {
        path: "/useredit",
        element: <><Navbar /><Useredit /></>
    },
    {
        path: "/userdelet",
        element: <><Navbar /><Userdelet /></>
    }
])

export default Mainrouter