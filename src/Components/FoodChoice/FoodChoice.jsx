import { useContext, useState } from 'react';
import { foods } from '../../foodData/foodData';
import Foods from '../Foods/Foods';
import DetailsOfFood from '../DetailsOfFood/DetailsOfFood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';

const FoodChoice = () => {
    const [food, setFood]= useState(foods);
    const initialState= food.filter(allFood => allFood.category === 'lunch');//for Default State Value//
    const [category, setCategory]= useState(initialState);

    const handleCategory= (whichCategory)=>{
        const whichFood= food.filter(allFood => allFood.category === whichCategory);
        setCategory(whichFood);
    }

    const [cart]= useContext(CartContext);

    return (
        <>
        <div className='flex justify-evenly font-bold bg-blue-100 pt-10 text-lg'>
                <button className='focus:text-red-700 focus:underline' onClick={()=>handleCategory("breakfast")}>Breakfast</button>
                <button className='focus:text-red-700 focus:underline' onClick={()=>handleCategory('lunch')}>Lunch</button>
                <button className='active:text-red-700 focus:text-red-700 focus:underline' onClick={()=>handleCategory('dinner')}>Dinner</button>
                
        </div>

        <div className='grid grid-cols-3 bg-blue-100 col-span-1 place-items-center pt-8 text-center'>
            {
                category.map(allFood=> <Foods key={allFood.id} foods={allFood}></Foods>)
            }
        </div>
        <div className=' bg-blue-100 flex justify-center items-center'>
            { cart==0 ? <button type="button" className="py-2 px-4 text-white bg-gray-300 rounded-full focus:outline-none" disabled><FontAwesomeIcon className='text-red-600' icon={faCartArrowDown}/> Check Out Food</button> : <Link to='/cart' className='ml-3 bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-full'><FontAwesomeIcon className='text-red-600' icon={faCartArrowDown}/> Check Out Food</Link>}
            
        </div>
        </>
    );
};

export default FoodChoice;