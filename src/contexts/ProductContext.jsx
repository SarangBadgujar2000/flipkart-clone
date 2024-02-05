import React, { createContext, useState } from 'react';

export const prodContext=createContext([])
const ProductsContext = ({children}) => {
    const [cartProducts,setCartProducts]=useState({})
    return (  
        <prodContext.Provider value={{cartProducts,setCartProducts}}>
            {children}
        </prodContext.Provider>
    );
}
 
export default ProductsContext;