import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const Foods = ({foods, handleDropProduct}) => {
    const {title, body, price, img, id}= foods;
    const [cart, setCart]= useContext(CartContext);
    
    return (
        <div className='pb-10 hover:shadow-2xl shadow-gray-950 p-5'>
            <img className='w-56' src={img}/>
            <div className='mt-4 leading-7'>
                <h1 className='font-medium'>{title}</h1>
                <p>{body}</p>
                <h3 className='font-bold text-xl'>${price}</h3>
                <Link to={'/food/'+id}><button className='ml-3 bg-blue-700 hover:bg-blue-500 text-white py-1 px-2 rounded-full mt-2'>Details</button></Link>
            </div>
        </div>
    );
};

export default Foods;