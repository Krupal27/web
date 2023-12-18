import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainheader from "./Com-Component/Mainheader";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const Mainrouter = createBrowserRouter ([
    {
        path : "/",
        element : <Mainheader/>
    },
    {
        path : "/home",
        element : <><Mainheader/> <Home/></>
    },
    {
        path : "/about",
        element : <><Mainheader/> <About/></>
    },
    {
        path : "/contact",
        element : <><Mainheader/> <Contact/></>
    },
])

export default Mainrouter