import React from 'react';
import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Classcompomenu extends Component {
    render() {
        return (
            <>

                <ul>
                    <li><Link to="Classcompointro">Classcompointro</Link></li>
                    <li><Link to="Classcompoprops">Classcompoprops</Link></li>
                    <li><Link to="Classcompostate">Classcompostate</Link></li>
                </ul>
                <Outlet />
            </>
        );
    }
}

export default Classcompomenu;