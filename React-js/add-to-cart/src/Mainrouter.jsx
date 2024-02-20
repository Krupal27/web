import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Product from "./Component/Front-end/Product/Product"

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Product /></>
    }
])

export default Mainrouter;