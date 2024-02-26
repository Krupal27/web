import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Product from './Component/Front-end/Product/Product';
import Home from './Component/Front-end/Product/Home';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Home /></>
    }
])

export default Mainrouter;