import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classone from "./01Classone";
import Classcompojsx from "./02Classcompojsx";
import Classcompoprops from "./03Classcompoprops";
// import Classcard from "./05Classcard";
import Classmaincard from "./06Classmaincard";

class Classcomporoutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Classcompomenu />}>
                        <Route path="Classcompointro" element={<Classcompointro />} />
                        <Route path="Classone" element={<Classone />} />
                        <Route path="Classcompojsx" element={<Classcompojsx />} />
                        <Route path="Classcompoprops" element={<Classcompoprops />} />
                        {/* <Route path="Classcard" element={<Classcard />} /> */}
                        <Route path="Classmaincard" element={<Classmaincard />} />
                    </Route>
                </Routes>
                {/* <Outlet /> */}
            </>
        )
    }
}
export default Classcomporoutes
