import React from "react";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./coman-component/Navbar";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Example from "./Component/Example";
const About = React.lazy(() => import("./Component/About"));
// import Functioncomporoutes from "./Component/Functioncomponent/Functioncomporoutes";
const Classcomporoutes = React.lazy(() => import("./Component/Classcomponent/Classcomporoutes"));
const Functioncomporoutes = React.lazy(() => import("./Component/Functioncomponent/Functioncomporoutes"));

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