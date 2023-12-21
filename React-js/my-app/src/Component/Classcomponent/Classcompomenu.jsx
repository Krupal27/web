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
                </ul>
                <Outlet/>
            </>
        )
    }
}

export default Classcompomenu
 
