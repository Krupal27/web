
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functioncompomenu from './Functioncompomenu';
import Functioncompointro from './01Functioncompointro';
import Usesatehooks from './02Usesatehooks';
import Useeffecthooks from './03Useeffecthooks';
import Usememohook from './04Usememohooks';

const Functioncomporoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Functioncompomenu />}>
                    <Route path='Functioncompointro' element={<Functioncompointro />} />
                    <Route path='Usesatehooks' element={<Usesatehooks />} />
                    <Route path='Useeffecthooks' element={<Useeffecthooks />} />
                    <Route path='Usememohook' element={<Usememohook />} />
                </Route>
            </Routes>
        </>
    );
};

export default Functioncomporoutes;