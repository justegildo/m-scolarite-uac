import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthRoute = () => {
    return (
        <Routes>
            <Route index element={<SignIn/>}/>
            <Route path='login' element={<SignIn/>}/>
            <Route path='register' element={<SignUp/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    );
};

export default AuthRoute;