import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Cart = () => {
    const [cart, setCart]= useContext(CartContext);
    console.log(cart);
    return (
        <>
        <div>
            
        </div>
        <div>
            {
            cart.map(foods=>{
                return (
                <div>
                <img className='max-w-28' src={foods.img}></img>
                <h1>{foods.title}</h1>
                <h1>{foods.price}</h1>
                </div>
                )
                })
                }
            <h1>On Cart: {cart.length}</h1>
        </div>
        </>
    );
};

export default Cart;