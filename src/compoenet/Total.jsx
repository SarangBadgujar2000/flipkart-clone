import React, { useContext, useEffect, useState } from 'react'
import { prodContext } from '../contexts/ProductContext'

const Total = () => {
    const { cartProducts } = useContext(prodContext)
    const [total, setTotal] = useState({count:0,totalPrice:0})
    const calculateTotal = () => {
        let newTotal = 0;
        let newCount = 0
        Object.keys(cartProducts).forEach((key) => {
            newTotal += cartProducts[key].details.price * cartProducts[key].count
            newCount+=cartProducts[key].count
        })
        setTotal({count:newCount,totalPrice:newTotal})
    }
    useEffect(() => {
        calculateTotal()
    }, [cartProducts])
    return (
        <div className={'flex justify-between'}>
            <div>Total</div>
            <div>Quantity : {total.count}</div>
            <div>Price : {total.totalPrice}</div>
            <button>CheckOut</button>
        </div>
    )
}

export default Total