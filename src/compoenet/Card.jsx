import React, { useContext, useEffect, useState } from 'react';
import { prodContext } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
const Card = ({ item }) => {
    const { id, thumbnail, title, rating, price, description } = item
    const { cartProducts, setCartProducts } = useContext(prodContext)
    const [addedToCart, setAddedToCart] = useState(false);
    const navigate=useNavigate()
   
    const productPage=()=>{
        navigate(`product/${id}`)
    }
    const removeFromCart = (e) => {
        e.stopPropagation()
        delete cartProducts[id]
        setCartProducts(cartProducts)
        setAddedToCart(false)
    }
    const addToCart = (e) => {
        e.stopPropagation()
        setAddedToCart(true)
        setCartProducts({...cartProducts, [id]: { count: 1, details: { id, thumbnail, title, rating, price, description } } })
    }
    useEffect(()=>{
        if(cartProducts[id]){
            setAddedToCart(true)
        }
    },[])


    return (
        <div onClick={()=>{productPage()}} className={'m-4'}>
            <div class={" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"}>
                <div className={'flex p-1'}>
                    <img className={'w-32 h-32'} src={thumbnail} alt={title} />
                    <h3 className={'m-4 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'}>{title}</h3>
                </div>
                <div className={"px-5 pb-5"}>
                    <h5 className={"text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 hover:line-clamp-3"}>{description}</h5>
                    <div className={"flex items-center mt-2.5 mb-5"}>
                        <span className={"bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"}>Rating : {rating}</span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                        <span className={"text-3xl font-bold text-gray-900 dark:text-white"}>${price}</span>
                        {
                            addedToCart === false ? <button onClick={(e) => { addToCart(e) }} className={"text-white bg-yellow-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Add to cart</button>
                                : <button onClick={(e) => { removeFromCart(e) }} className={"text-white bg-orange-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Remove From Cart</button>

                        }
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Card;
