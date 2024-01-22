import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classone from "./01Classone";
import Classcompojsx from "./02Classcompojsx";
import Classcompoprops from "./03Classcompoprops";
import Classmaincard from "./06Classmaincard";
import Classcompostate from "./07Classcompostate";
import Conditionrendaring from "./08Coditionrendaring";
import Uncontrolledcompo from "./09Uncontrolledcompo";
import Controlledcompo from "./10Controlledcompo";
import Listandkeys from "./11Listandkeys";
import Classcompositionandinheritance from "./12Classcompositionandinheritance";
import Maincounter from "./HOC/Maincounter";

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
                        <Route path="Classmaincard" element={<Classmaincard />} />
                        <Route path="Classcompostate" element={<Classcompostate />} />
                        <Route path="Conditionrendaring" element={<Conditionrendaring />} />
                        <Route path="Uncontrolledcompo" element={<Uncontrolledcompo />} />
                        <Route path="Controlledcompo" element={<Controlledcompo />} />
                        <Route path="Listandkeys" element={<Listandkeys />} />
                        <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance />} />
                        <Route path="Maincounter" element={<Maincounter />} />
                    </Route>
                </Routes>
                {/* <Outlet /> */}
            </>
        )
    }
}
export default Classcomporoutes
