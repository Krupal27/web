import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './src/Coman-compo/Navbar';
import Registration from "./src/Component/Registration"
import Login from './src/Component/Login';

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
    }
])

export default Mainrouter;