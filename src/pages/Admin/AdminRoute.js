import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ALayout, Dashboard, Domaine, Mention, Specialite, EntiteGestionnaire, Commission, } from '../Admin'
import Error from '../../_utils/Error'; 




const AdminRoute = () => {
    return (
        <Routes>

            <Route element={<ALayout />} >
                <Route index element={<Dashboard/>}/>

                <Route path='/dashboard' element={<Dashboard />} />

                <Route path="/domaine" element={<Domaine />} /> 
                
                <Route path="/commission" element={<Commission />} />

                <Route path="/mention" element={<Mention />} />

                <Route path="/specialite" element={<Specialite />} />

                <Route path="/entite-gestionnaire" element={<EntiteGestionnaire />}/>

            </Route>

            <Route path='*' element={<Error />}/>

        </Routes>
    );
};

export default AdminRoute;