import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Functioncompomenu = () => {
    return (
        <>
            <ul>
                <li><Link to="Functioncompointro">Functioncompointro</Link></li>
                <li><Link to="Usesatehooks">Usesatehooks</Link></li>
                <li><Link to="Useeffecthooks">Useeffecthooks</Link></li>
                <li><Link to="Usememohook">Usememohook</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};

export default Functioncompomenu;
