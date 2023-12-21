import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classone from "./01Classone";
import Classcompojsx from "./02Classcompojsx";

class Classcomporoutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Classcompomenu />}>
                        <Route path="Classcompointro" element={<Classcompointro />} />
                        <Route path="Classone" element={<Classone />} />
                        <Route path="Classcompojsx" element={<Classcompojsx />} />
                    </Route>
                </Routes>
                {/* <Outlet /> */}
            </>
        )
    }
}
export default Classcomporoutes
