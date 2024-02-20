import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from "./Header/Navbar";
import Product from './Front-end/Comman-compo/Product/Product';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /></>
    },
    {
        path: "/product",
        element: <><Navbar /><Product /></>
    }
])
export default Mainrouter;