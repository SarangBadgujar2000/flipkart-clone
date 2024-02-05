import React, { useContext } from 'react';
import { prodContext } from '../contexts/ProductContext';
import CartItem from '../compoenet/CartItem';
import EmptyCart from './EmptyCart.webp'
import Total from '../compoenet/Total';

const Carts = () => {
    const { cartProducts } = useContext(prodContext)
    const noOfItems = Object.keys(cartProducts)

    console.log(cartProducts)
    return (
        <div className={'flex flex-col-reverse items-center'}>
            {
                noOfItems.length !== 0
                    ? (
                        <div>
                        {Object.keys(cartProducts).map((id) => <CartItem key={id} item={cartProducts[id]} />)}
                        <Total />
                        </div>
                    )

                    : (
                        <div className={'flex flex-col justify-center items-center'}>
                            <img src={EmptyCart} alt="Empty Cart" />
                            <h5 className={"m-4 text-3xl font-semibold tracking-wide text-gray-900 dark:text-white"}>Your Cart is empty</h5>
                            <p className={'m-2 text-xl font-semibold tracking-wide text-gray-900 dark:text-white'}>Looks like you have not added anything to you cart. Go ahead & explore top categories.</p>
                        </div>

                    )
            }
        </div>
    );
}

export default Carts;