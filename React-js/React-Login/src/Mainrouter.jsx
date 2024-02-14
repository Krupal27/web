import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Coman-compo/Navbar';
import Registration from "./Component/Registration"
import Login from './Component/Login';
import Admin from "./Component/Admin";
import User from "./Component/User";
import Useredit from "./Component/Useredit";
import Userdetails from "./Component/Userdetails";
import Userdelete from "./Component/Userdelete"

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /></>
    },
    {
        path: "/registration",
        element: <><Navbar /><Registration /></>
    },
    {
        path: "/login",
        element: <><Navbar /><Login /></>
    },
    {
        path: "/admin",
        element: <><Navbar /><Admin /></>
    },
    {
        path: "/user",
        element: <><Navbar /><User /></>
    },
    {
        path: "/useredit/:userid",
        element: <><Navbar /><Useredit /></>
    },
    {
        path: "/userdetails",
        element: <><Navbar /><Userdetails /></>
    },
    {
        path: "/userdelete",
        element: <><Navbar /><Userdelete /></>
    }


])

export default Mainrouter;