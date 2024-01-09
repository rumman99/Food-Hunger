import { useContext } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';
import Foods from '../Foods/Foods';

const Cart = () => {
    const [cart, setCart]= useContext(CartContext);
     
    const handleDropProduct=(uniqueId)=>{
        const removeProduct= cart.filter(product => product.cartId != parseInt(uniqueId));
        setCart(removeProduct);
        console.log(removeProduct);
    }
    

    return (
        <>
        <div>
            {
            cart.map(foods=> {
                return (
                <div key={foods.cartId}>
                <img className='max-w-28' src={foods.img}></img>
                <h1>{foods.title}</h1>
                <h1>{foods.price}</h1>
                <h1>Quantity: {foods.quantity}</h1>
                <button onClick={()=>handleDropProduct(foods.cartId)}>Drop</button>
                </div>
                )
                })
            }
            <h1>On Cart: {cart.length}</h1>
            <Link to='/'>Back to Home</Link>
        </div>
        </>
    );
};

export default Cart;