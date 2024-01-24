import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./coman-component/Navbar";
import Home from "./Component/Home";
// import About from "./Component/About";
import Product from "./Component/Product";
import { Suspense } from "react";
import Example from "./Component/Example";
import Functioncomporoutes from "./Component/Functioncomponent/Functioncomporoutes";
// import Classcompointro from "./Component/Classcomponent/Classcompointro";
const Classcomporoutes = React.lazy(() => import("./Component/Classcomponent/Classcomporoutes"))
// import Classcompomenu from "./Component/Classcomponent/Classcompomenu";
const About = React.lazy(() => import("./Component/About"))

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /></>
    },
    {
        path: "/home",
        element: <><Navbar /><Home /></>
    },
    {
        path: "/About",
        element: <><Navbar />
            <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
        </>
    },
    {
        path: "/product",
        element: <><Navbar /><Product /></>
    },
    {
        path: "/example",
        element: <><Navbar /><Example /></>,
        children: [
            {
                path: "Classcomponent/*",
                element: <>
                    <Suspense fallback={<h1>Loading... </h1>}><Classcomporoutes /></Suspense></>
            },
            {
                path: "Functioncomponent/*",
                element: <><Suspense fallback={<h1>Loading... </h1>}><Functioncomporoutes /></Suspense></>
            }
        ]
    }
]);

export default Mainrouter