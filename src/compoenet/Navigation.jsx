import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className={'bg-green-500 p-5'} >
            <nav className={'flex justify-between items-center'} >
                <div className={'w-44'}><img src={logo} alt="logo" /></div>
                <div className={'ml-10 text-xl hover:text-red-600'}><NavLink to={'/'}>Home</NavLink> </div>
                <div className={'ml-10 text-xl hover:text-red-600'}><NavLink to={'/products'}>Products</NavLink></div>
                <div className={'ml-auto mr-4 text-xl hover:text-red-600'}><NavLink to={'/carts'}>Cards</NavLink></div>
            </nav>
        </div>
    );
}

export default Navigation;