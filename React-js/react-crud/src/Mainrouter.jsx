import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Coman-compo/Navbar';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /></>
    }
])

export default Mainrouter