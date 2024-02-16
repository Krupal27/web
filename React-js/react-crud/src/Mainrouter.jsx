import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Coman-compo/Navbar';
import Userdata from "./Component/Userdata";
import Useradd from "./Component/Useradd";
import Useredit from "./Component/Useredit";
import Userdelet from "./Component/Userdelet"
import Userdetails from './Component/Userdetails';
import Usercrud from './Component/Usercrud';
import Usercrud2 from './Component/2Usercrud';

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
        path: "/userdetails/:userid",
        element: <><Navbar /><Userdetails /></>
    },
    {
        path: "/userdelet/:userid",
        element: <><Navbar /><Userdelet /></>
    },
    {
        path: "/usercrud",
        element: <><Navbar /><Usercrud /></>
    },
    {
        path: "/usercrud2",
        element: <><Navbar /><Usercrud2 /></>
    }
])

export default Mainrouter;