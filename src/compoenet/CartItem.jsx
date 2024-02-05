import React, { useContext } from 'react';
import { prodContext } from '../contexts/ProductContext';
const CartItem = ({ item }) => {
    const { count, details: { id, thumbnail, price, description, title, rating } } = item
    const { cartProducts, setCartProducts } = useContext(prodContext)
    const increament=()=>{
        cartProducts[id]={...cartProducts[id],count:cartProducts[id].count+1}
        setCartProducts({...cartProducts})
    }
    const decreament=()=>{
        if(cartProducts[id].count>0){
            cartProducts[id]={...cartProducts[id],count:cartProducts[id].count-1}
            if(cartProducts[id].count===0){
                delete cartProducts[id] 
            }
            setCartProducts({...cartProducts})
        }
        
    }
    return (
        <div className={' my-10  sm:mx-0 sm:w-[30rem] md:w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[90rem]'}>
            <div class={" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"}>
                <div className={'flex p-1 justify-between'}>
                    <img className={'w-32 h-32'} src={thumbnail} alt={title} />
                    <h3 className={'m-4 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'}>{title}</h3>
                    <div className={'m-10'}>
                        <button onClick={()=>decreament()} className={'bg-gray-300 w-12 text-xl hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-sm  border-t-2 border-l-2  border-b-2  border-black'}>-</button>
                        <button className={'bg-white w-12 text-xl text-gray-800 font-bold py-2 rounded-sm border-2 border-black'}>{count}</button>
                        <button onClick={()=>increament()} className={'bg-gray-300 w-12 text-xl hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-sm border-t-2 border-r-2 border-b-2  border-black'}>+</button>
                    </div>
                </div>
                <div className={"px-5 pb-5"}>
                    <h5 className={"text-xl font-semibold tracking-tight text-gray-900 dark:text-white"}>{description}</h5>
                    <div className={"flex items-center mt-2.5 mb-5"}>
                        <span className={"bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"}>Rating : {rating}</span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                        <span className={"text-3xl font-bold text-gray-900 dark:text-white"}>${price}</span>
                        <button onClick={()=>{delete cartProducts[id]; setCartProducts({...cartProducts})}} className={"text-white bg-orange-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Remove from cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;