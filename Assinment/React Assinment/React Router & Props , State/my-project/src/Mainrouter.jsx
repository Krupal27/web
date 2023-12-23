import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainheader from "./Com-Component/Mainheader";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Example from "./Components/Example";
import Classcomporouter from "./Components/Classcompo/Classcomporouter";

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
    {
        path: "/example",
        element: <><Mainheader/><Example/></>,
        children: [
            {
                path: "Classcomponent/*",
                element: <Classcomporouter/>
            }
        ]
    }
])

export default Mainrouter