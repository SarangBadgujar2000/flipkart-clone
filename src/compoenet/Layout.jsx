import React from 'react';
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const Layout = () => {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;