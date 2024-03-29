import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { foods } from '../../foodData/foodData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBackspace } from '@fortawesome/free-solid-svg-icons' 
import Foods from '../Foods/Foods';
import { CartContext } from '../../App';

const DetailsOfFood = () => {
    const {foodId}= useParams();
    const [food, setFood]= useState(foods); 

    const [cart, setCart]= useContext(CartContext);

    const handleCartButton=(foodId, count)=>{
        const targetFood= food.find(allFood=> allFood.id === parseInt(foodId));
        const addedCartId= {...targetFood, cartId: cart.length+1, quantity: count}; //added CartId for remove duplicate food//
        setCart([...cart, addedCartId]);
    }
        const foodWithIdMatch= food.find(allFood=> allFood.id === parseInt(foodId))
        // const {title, body}= foodWithIdMatch;

        /////Food Quantity Control //////
        const [count, setCount]=useState(1);
        
    return (
        <div className='flex justify-center mt-10'>
            <div>
                <h1 className='text-4xl font-semibold h-28'>{foodWithIdMatch.title}</h1>
                <h1>{foodWithIdMatch.body}</h1>
                <h1 className='text-4xl font-semibold'>${foodWithIdMatch.price}</h1>
                <div>
                    <button onClick={()=> setCount(count=>count+1)}>+</button>
                    <p>{count}</p>
                    <button onClick={()=> {if(count>1)setCount(count=> count-1)}}>-</button>
                </div>
                <button onClick={()=>handleCartButton(foodId, count)} className='mt-5 bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-full'><FontAwesomeIcon icon={faCartShopping}/> Add</button>
            </div>
            <div>
                {/* <h1>ID: {foodId}</h1> */}
                <img className='max-w-md' src={foodWithIdMatch.img} alt="" />
                <Link className='mt-5 bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-full' to='/'> <FontAwesomeIcon icon={faBackspace}/> Go Home</Link>
            </div>
                {/* <Foods foods={foodWithIdMatch}></Foods> */}
            
        </div>
    );
};

export default DetailsOfFood;