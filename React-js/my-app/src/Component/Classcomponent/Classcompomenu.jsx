import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro">Classcompointro</Link></li>
                    <li><Link to="Classone">Classone</Link></li>
                    <li><Link to="Classcompojsx">Classcompojsx</Link></li>
                    <li><Link to="Classcompoprops">Classcompoprops</Link></li>
                    <li><Link to="Classmaincard">Classmaincard</Link></li>
                    <li><Link to="Classcompostate">Classcompostate</Link></li>
                    <li><Link to="Conditionrendaring">Conditionrendaring</Link></li>
                    <li><Link to="Uncontrolledcompo">Uncontrolledcompo</Link></li>
                    <li><Link to="Controlledcompo">Controlledcompo</Link></li>
                    <li><Link to="Listandkeys">Listandkeys</Link></li>
                </ul>
                <Outlet/>
            </>
        )
    }
}

export default Classcompomenu
 
