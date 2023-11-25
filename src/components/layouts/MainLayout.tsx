import React, { ComponentElement } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { ServiceLoading } from '../loading';
import { useSelector } from 'react-redux';
import { RootState } from '../../api/store';

const MainLayout = () => {

    return (


        <div className="App bg-white dark:bg-slate-900  h-screen">
            <NavBar />
                <Outlet/>
            <Footer />


        </div>


    );
};

export default MainLayout;