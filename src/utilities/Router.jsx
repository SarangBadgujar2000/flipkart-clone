import React from 'react';
import { Route, Routes } from "react-router-dom";
//import ProductPage from '../pages/ProductPage';
import Carts from '../pages/Carts';
import Homepage from '../pages/HomePage';
import Products from '../pages/Products';
import Layout from '../compoenet/Layout';
import ProductPage from '../pages/ProductPage';


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='' element={<Homepage />} />
                <Route path='products' element={<Products />} />
                <Route path='products/product/:id' element={<ProductPage/>}/>
                <Route path='carts' element={<Carts />} />
            </Route>
        </Routes>
    );
}

export default Router;
