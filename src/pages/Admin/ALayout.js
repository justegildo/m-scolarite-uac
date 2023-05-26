import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/admin/Header';
import './admin.css'
import Footer from '../../components/admin/Footer';


const ALayout = () => {
    return (
        <div className='ALayout'>
            <Header/>
            <div id=''>
                <div id=''> 
                    <Outlet /> 
                </div>
            </div>
            <Footer/>

        </div>
    );
};

export default ALayout;