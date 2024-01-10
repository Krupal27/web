import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Functioncompomenu = () => {
    return (
        <>
            <ul>
                <li><Link to="Functioncompointro">Functioncompointro</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};

export default Functioncompomenu;