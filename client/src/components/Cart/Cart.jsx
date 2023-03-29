import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export const Cart = () => {


    const cart = useSelector((state) => state.cart)

    useEffect(() => {
    }, [cart.length])


    const getCartTotal = () => {
        let runningTotal = 0

        cart.forEach(item => {
            runningTotal += (Number(item.price) * item.quantity)
        });
        return runningTotal.toFixed(2)
        
    }

    return(
        <div>
            <h3>Your total is: ${getCartTotal() || 0 }</h3>
            
            {cart?.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price} 
                        quantity={item.quantity}
                    />
                ))} 
        </div>
    )
}

export default Cart