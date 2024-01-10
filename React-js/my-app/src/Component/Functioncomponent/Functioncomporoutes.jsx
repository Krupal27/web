
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functioncompomenu from './Functioncompomenu';
import Functioncompointro from './Functioncompointro';

const Functioncomporoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Functioncompomenu />}>
                    <Route path='Functioncompointro' element={<Functioncompointro />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Functioncomporoutes;