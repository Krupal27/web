import React from 'react';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Classcompomenu from './Classcompomenu';
import Classcompointro from './Classcompointro';
import Classmaincard from './02Classmaincard';
import Classcompoprops from './01Classcomopoprops';
import Classcompostate from './03Classcompostate';


class Classcomporouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Classcompomenu />}>
                        <Route path='Classcompointro' element={<Classcompointro />} />
                        <Route path='Classcompoprops' element={<Classcompoprops />} />
                        <Route path='Classcompostate' element={<Classcompostate />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default Classcomporouter;